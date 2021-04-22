from pydantic import BaseModel
from datetime import date

from app.schemas.tests import Test


# Rooms


class RoomCreate(BaseModel):
    """
    Quiz Room to be created representation.
    """
    name: str
    idTest: int
    idUser: int


class Room(RoomCreate):
    """
    Quiz Room representation.
    """
    idRoom: int
    isActive: bool
    isRunning: bool
    createdAt: date

    class Config:
        orm_mode = True
