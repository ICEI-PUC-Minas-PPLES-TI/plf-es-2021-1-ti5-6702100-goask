from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.database import SessionLocal
from app.models.rooms import Room


async def save_room_data(res, data_dict: {}):
    db: Session = SessionLocal()
    db_room: Room = db.query(Room).filter(Room.idRoom == data_dict.get('room_id')).first()
    db_room.roomdata = str(res)
    db.flush()
    db.commit()
    db.close()


async def get_number_of_questions(data_dict: {}):
    db: Session = SessionLocal()
    db_room: Room = db.query(Room).filter(Room.idRoom == data_dict.get('room_id')).first()
    quantity_questions = len(db_room.test.questions)
    db.close()
    return quantity_questions


def update_turn_off_room(data_dict: {}):
    db: Session = SessionLocal()
    db_room: Room = db.query(Room).filter(Room.idRoom == data_dict.get('room_id')).first()
    db_room.isRunning = False
    db_room.isActive = False
    db.flush()
    db.commit()
    db.close()
