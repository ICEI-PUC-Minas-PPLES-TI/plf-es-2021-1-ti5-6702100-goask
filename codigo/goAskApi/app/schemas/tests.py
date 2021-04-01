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
    category: Category
    questions: List[Question]


class Test(TestBase):
    """
    Quiz format representation.
    """
    idTest: int
    createdAt: date
    updatedAt: date

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True
