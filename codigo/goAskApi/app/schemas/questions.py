from pydantic import BaseModel
from datetime import date
from typing import List

from app.schemas.answers import Answer


# Question

class QuestionCreate(BaseModel):
    """
    Quiz Question to be created representation.
    """
    questionText: str
    idTest: int
    answers: List[Answer]


class Question(QuestionCreate):
    """
    Quiz Question representation.
    """
    createdAt: date
    updatedAt: date

    class Config:
        orm_mode = True
