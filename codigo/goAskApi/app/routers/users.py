from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.auth import check_token_access
from app.crud import crud_user
from app.db.database import SessionLocal
from app.schemas.users import User, UserCreate

router = APIRouter()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=User)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = crud_user.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud_user.create_user(db=db, user=user)


@router.get("/all", response_model=List[User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db),
               user_email: str = Depends(check_token_access)):
    return crud_user.get_users(db, skip=skip, limit=limit)


@router.get("/", response_model=User)
def read_user(db: Session = Depends(get_db), user_email: str = Depends(check_token_access)):
    db_user = crud_user.get_user_by_email(db, email=user_email)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user
