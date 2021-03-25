from datetime import timedelta
from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.auth import verify_password, create_access_token
from app.crud import crud_user
from app.db.database import SessionLocal, engine
from app.db import models, schemas

models.Base.metadata.create_all(bind=engine)

router = APIRouter()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud_user.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud_user.create_user(db=db, user=user)


@router.get("/all", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_user.get_users(db, skip=skip, limit=limit)


@router.get("/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud_user.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@router.post("/login", response_model=schemas.Token)
def authenticate_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user: models.User = crud_user.get_user_by_email(db, email=user.email)
    if db_user is None:
        raise HTTPException(status_code=400, detail="Username not existed")
    else:
        is_password_correct = verify_password(user.password, db_user.password)
        if is_password_correct:
            access_token_expires = timedelta(minutes=120)
            jwt = create_access_token(
                data={"sub": db_user.email}, expires_delta=access_token_expires
            )
            return {"access_token": jwt, "token_type": "bearer"}
