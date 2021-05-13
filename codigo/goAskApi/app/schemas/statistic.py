from pydantic import BaseModel

from app.schemas.rooms import Room


class StatisticHome(BaseModel):
    qtd_tests: int
    qtd_rooms: int
    qtd_rooms_actives: int


class StatisticRelatory(BaseModel):
    room: Room
