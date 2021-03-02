from sqlalchemy import Column, Integer, String, Date, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from .database import Base


# This file contains the database ORM Objects, do not confund with the Pydantic models
# which can be found in the db.schemas.py file.


class User(Base):
    """
    App's User database representation.
    """

    __tablename__ = "User"

    idUser = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    createdAt = Column(Date)
    updatedAt = Column(Date)

    tests = relationship("Test", back_populates="owner")
    rooms = relationship("Room", back_populates="owner")


class Category(Base):
    """
    Quizz category database representation.
    """

    __tablename__ = "Category"

    idCategory = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)

    tests = relationship("Test", back_populates="category")


class Test(Base):
    """
    Quiz format database representation.
    """

    __tablename__ = "Test"

    idTest = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)
    createdAt = Column(Date)
    updatedAt = Column(Date)
    idCategory = Column(Integer, ForeignKey("Category.idCategory"))
    idUser = Column(Integer, ForeignKey("User.idUser"))

    owner = relationship("User", back_populates="tests")
    category = relationship("Category", back_populates="tests")
    questions = relationship("Question", back_populates="test")


class Question(Base):
    """
    Quiz Question database representation.
    """

    __tablename__ = "Question"

    idQuestion = Column(Integer, primary_key=True, index=True)
    questionText = Column(String)
    createdAt = Column(Date)
    updatedAt = Column(Date)
    idTest = Column(Integer, ForeignKey("Test.idTest"))

    test = relationship("Test", back_populates="questions")
    answers = relationship("Answer", back_populates="question")


class Answer(Base):
    """
    Question's Answer database representation.
    """

    __tablename__ = "Answer"

    idAnswer = Column(Integer, primary_key=True, index=True)
    isCorrect = Column(Boolean)
    answerText = Column(String)
    createdAt = Column(Date)
    updatedAt = Column(Date)
    idQuestion = Column(Integer, ForeignKey("Question.idQuestion"))

    question = relationship("Question", back_populates="answers")


class Room(Base):
    """
    Quiz Room database representation.
    """

    __tablename__ = "Room"

    idRoom = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    isActive = Column(Boolean)
    isRunning = Column(Boolean)
    createdAt = Column(Date)
    idUser = Column(Integer, ForeignKey("User.idUser"))

    owner = relationship("User", back_populates="rooms")
