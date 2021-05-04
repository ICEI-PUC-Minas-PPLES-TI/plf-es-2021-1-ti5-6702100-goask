from typing import List

from pydantic import BaseModel, Json
from datetime import date


# Rooms


class RoomCreate(BaseModel):
    """
    Quiz Room to be created representation.
    """
    name: str
    idTest: int
    idUser: int
    isPublic: bool


class Room(RoomCreate):
    """
    Quiz Room representation.
    """
    idRoom: int
    isActive: bool
    isRunning: bool
    createdAt: date
    roomData: Json

    class Config:
        orm_mode = True
