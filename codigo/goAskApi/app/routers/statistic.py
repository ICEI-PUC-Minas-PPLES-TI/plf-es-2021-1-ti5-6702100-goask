from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.auth import check_token_access
from app.crud import crud_user, crud_statisc
from app.db.database import SessionLocal
from app.models.users import User
from app.schemas.rooms import Room
from app.schemas.statistic import StatisticHome

router = APIRouter()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/home", response_model=StatisticHome)
def generate_to_home(db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_user: User = crud_user.get_user_by_uuid(db, uuid=uuid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud_statisc.generate_to_home(db, db_user)


@router.get("/relatory", response_model=List[Room])
def generate_to_relatory(db: Session = Depends(get_db),
               uuid: str = Depends(check_token_access)):
    db_user: User = crud_user.get_user_by_uuid(db, uuid=uuid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud_statisc.generate_to_relatory(db, db_user)
