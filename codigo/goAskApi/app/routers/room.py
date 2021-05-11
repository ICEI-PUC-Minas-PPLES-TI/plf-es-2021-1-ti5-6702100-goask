from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.auth import check_token_access
from app.crud import crud_room, crud_user, crud_test
from app.db.database import SessionLocal
from app.schemas.rooms import Room, RoomCreate
from app.schemas.tests import Test

router = APIRouter()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=Room)
def create_room(room: RoomCreate, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_user = crud_user.get_user_by_uuid(db, uuid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud_room.create_room(db, room)


@router.get("/", response_model=List[Room])
def read_room_by_user(db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_user = crud_user.get_user_by_uuid(db, uuid=uuid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud_room.get_all_rooms_by_User(db, db_user)


@router.get("/all", response_model=List[Room])
def read_all_rooms(db: Session = Depends(get_db)):
    return crud_room.get_all_rooms(db)


@router.get('/name/{room_name}', response_model=Room)
def read_room_by_name(room_name: str, db: Session = Depends(get_db)):
    return crud_room.get_room_by_name(db, room_name)


@router.put("/{room_id}", response_model=Room)
def update_room_running(room_id: int, db: Session = Depends(get_db)):
    db_room = crud_room.get_room_by_id(db, room_id)
    if db_room is None:
        raise HTTPException(status_code=404, detail="Room not found")
    return crud_room.update_running(db=db, db_room=db_room, isRunning=True)


@router.get("/{test_id}", response_model=Test)
def read_test(test_id: int, db: Session = Depends(get_db)):
    db_test: Test = crud_test.get_test_by_id(db, test_id)
    if db_test is None:
        raise HTTPException(status_code=404, detail="Test not found")
    return db_test

