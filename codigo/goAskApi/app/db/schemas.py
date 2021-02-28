from pydantic import BaseModel
from datetime import date


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
    # tests
    # rooms
