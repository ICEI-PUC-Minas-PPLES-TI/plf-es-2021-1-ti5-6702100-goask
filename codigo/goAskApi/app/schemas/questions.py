from pydantic import BaseModel
from datetime import date
from typing import List

from app.schemas.answers import Answer, AnswerCreate, AnswerUpdate


# Question

class QuestionCreate(BaseModel):
    """
    Quiz Question to be created representation.
    """
    questionText: str
    idTest: int


class QuestionAnswerCreate(QuestionCreate):
    """
    Quiz Question to be created representation.
    """
    answers: List[AnswerCreate]


class QuestionUpdate(BaseModel):
    """
    Quiz Question to be updated representation.
    """
    idQuestion: int
    answers: List[AnswerUpdate]
    questionText: str


class Question(QuestionCreate):
    """
    Quiz Question representation.
    """
    idQuestion: int
    answers: List[Answer]
    createdAt: date
    updatedAt: date

    class Config:
        orm_mode = True
