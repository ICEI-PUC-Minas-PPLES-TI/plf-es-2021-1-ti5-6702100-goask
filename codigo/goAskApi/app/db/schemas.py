from pydantic import BaseModel
from datetime import date
from typing import List, Optional


# Category

class CategoryCreate(BaseModel):
    """
    Quiz category to be created representation.
    """
    name: str


class Category(CategoryCreate):
    """
    Quiz category representation.
    """
    idCategory: int

    class Config:
        orm_mode = True


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


# Question

class QuestionCreate(BaseModel):
    """
    Quiz Question to be created representation.
    """
    questionText: str
    answers: List[Answer]


class Question(QuestionCreate):
    """
    Quiz Question representation.
    """
    createdAt: date
    updatedAt: date

    class Config:
        orm_mode = True


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


# Rooms


class RoomCreate(BaseModel):
    """
    Quiz Room to be created representation.
    """
    name: str
    test: Test


class Room(RoomCreate):
    """
    Quiz Room representation.
    """
    idRoom: int
    isActive: bool
    isRunning: bool
    createdAt: date

    class Config:
        orm_mode = True


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


# Token
class Token(BaseModel):
    """
    App's Token basic representation.
    """
    access_token: str
    token_type: str


class TokenData(BaseModel):
    """
    App's Token basic representation.
    """
    user_email: Optional[str] = None
