from pydantic import BaseModel
from datetime import date
from typing import List

from app.schemas.categories import Category
from app.schemas.questions import Question


# Test

class TestBase(BaseModel):
    """
    Quiz format basic representation.
    """
    name: str
    description: str


class TestCreate(TestBase):
    """
    Quiz format basic representation.
    """

    idCategory: int
    idUser: int


class TestUpdate(TestBase):
    """
    Quiz format basic representation.
    """

    idTest: int


class Test(TestCreate):
    """
    Quiz format representation.
    """
    idTest: int
    createdAt: date
    updatedAt: date
    questions: List[Question]
    category: Category

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True
