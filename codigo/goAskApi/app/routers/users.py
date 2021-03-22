from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

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


@router.get("/all", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_user.get_users(db, skip=skip, limit=limit)


@router.post("/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud_user.create_user(db=db, user=user)
