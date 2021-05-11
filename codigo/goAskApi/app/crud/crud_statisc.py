from typing import List

from sqlalchemy.orm import Session

from app.models.rooms import Room
from app.models.tests import Test
from app.models.users import User


def generate_to_home(db: Session, db_user: User):
    db_tests: List[Test] = db.query(Test).filter(Test.idUser == db_user.idUser).all()
    db_rooms: List[Room] = db.query(Room).filter(Room.idUser == db_user.idUser).all()
    qtd_tests = len(db_tests)
    qtd_rooms: int = len(db_rooms)
    qtd_rooms_actives: int = 0
    for room in db_rooms:
        if room.isActive:
            qtd_rooms_actives = +1
    return {"qtd_tests": qtd_tests, "qtd_rooms": qtd_rooms, "qtd_rooms_actives": qtd_rooms_actives}


def generate_to_relatory(db: Session, db_user: User):
    db_room: List[Room] = db.query(Room).filter(Room.idUser == db_user.idUser).all()
    return db_room