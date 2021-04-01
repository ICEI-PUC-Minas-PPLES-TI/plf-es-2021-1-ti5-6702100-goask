from pydantic import BaseModel
from datetime import date


# Answer

class AnswerCreate(BaseModel):
    """
    Question's Answer to be created representation.
    """
    isCorrect: bool
    answerText: str


class Answer(AnswerCreate):
    """
    Question's Answer representation.
    """
    createdAt: date
    updatedAt: date

    class Config:
        orm_mode = True
