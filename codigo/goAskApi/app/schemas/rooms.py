from typing import List

from pydantic import BaseModel
from datetime import date


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
    roomdata: List[dict]

    class Config:
        orm_mode = True
