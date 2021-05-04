from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.database import SessionLocal
from app.models.rooms import Room


async def save_room_data(res, data_dict):
    db: Session = SessionLocal()
    db_room: Room = db.query(Room).filter(Room.idRoom == data_dict.get('room_id')).first()
    db_room.roomdata = res
    db.flush()
    db.commit()
    db.close()


async def get_number_of_questions(data_dict):
    db: Session = SessionLocal()
    db.close()
