from typing import List

from pydantic import BaseModel
from datetime import date

from pydantic.types import Json

from app.schemas.tests import Test


# Rooms


class RoomCreate(BaseModel):
    """
    Quiz Room to be created representation.
    """
    name: str
    idTest: int
    idUser: int
    isPublic: bool


class ResponseJson(BaseModel):
    name: str
    right_answers: int


class Room(RoomCreate):
    """
    Quiz Room representation.
    """
    idRoom: int
    isActive: bool
    isRunning: bool
    createdAt: date
    test: Test
    roomData: List[ResponseJson]

    class Config:
        orm_mode = True
