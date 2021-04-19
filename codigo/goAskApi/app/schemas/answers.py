from pydantic import BaseModel
from datetime import date


# Answer

class AnswerCreate(BaseModel):
    """
    Question's Answer to be created representation.
    """
    isCorrect: bool
    answerText: str


class AnswerUpdate(AnswerCreate):
    """
    Question's Answer to be updated representation.
    """
    idAnswer: int


class Answer(AnswerCreate):
    """
    Question's Answer representation.
    """
    idAnswer: int
    createdAt: date
    updatedAt: date

    class Config:
        orm_mode = True
