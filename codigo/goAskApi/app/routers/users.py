from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.auth import check_token_access
from app.crud import crud_user
from app.db.database import SessionLocal
from app.schemas.users import User, UserCreate, UserBase

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
    db_user: User = crud_user.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud_user.create_user(db=db, user=user)


@router.get("/", response_model=User)
def read_user(db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_user: User = crud_user.get_user_by_uuid(db, uuid=uuid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@router.put("/", response_model=User)
def update_user(user: UserBase, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_user: User = crud_user.get_user_by_uuid(db, uuid=uuid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud_user.update_user(db=db, user=user, db_user=db_user)


@router.delete("/", response_model=User)
def delete_user(db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_user: User = crud_user.get_user_by_uuid(db, uuid=uuid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud_user.delele_user(db=db, db_user=db_user)
