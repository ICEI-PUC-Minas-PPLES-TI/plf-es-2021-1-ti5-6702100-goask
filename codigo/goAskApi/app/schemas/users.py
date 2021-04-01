from pydantic import BaseModel
from datetime import date
from typing import List

from app.schemas.tests import Test
from app.schemas.rooms import Room


# User

class UserBase(BaseModel):
    """
    App's User basic representation.
    """
    email: str


class UserCreate(UserBase):
    """
    App's User to be created representation.
    """
    password: str


class User(UserBase):
    """
    App's User overall representation.
    """
    idUser: int
    createdAt: date
    updatedAt: date
    tests: List[Test] = []
    rooms: List[Room] = []

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True
