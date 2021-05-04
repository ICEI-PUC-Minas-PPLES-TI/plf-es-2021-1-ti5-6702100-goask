from sqlalchemy.orm import Session

from app.models.users import User
from app.schemas.rooms import RoomCreate
from app.models.rooms import Room


def create_room(db: Session, room: RoomCreate):
    db_room = Room(name=room.name, idTest=room.idTest, idUser=room.idUser, isPublic=room.isPublic)
    db.add(db_room)
    db.commit()
    db.refresh(db_room)
    return db_room


def get_all_rooms(db: Session):
    return db.query(Room).filter(Room.isPublic and Room.isActive and Room.isRunning == False).all()


def get_all_rooms_by_User(db: Session, user: User):
    return db.query(Room).filter(Room.idUser == user.idUser).all()


def get_room_by_id(db: Session, room_id: int):
    return db.query(Room).filter(Room.idRoom == room_id).first()


def get_room_by_name(db: Session, room_name: str):
    return db.query(Room).filter(Room.name == room_name).first()


def update_running(db: Session, db_room: Room, isRunning: bool):
    db_room.isRunning = isRunning
    db.flush()
    db.commit()
    return db_room


def update_turnoffroom(db: Session, db_room: Room):
    db_room.isRunning = False
    db_room.isActive = False
    db.flush()
    db.commit()
    return db_room
