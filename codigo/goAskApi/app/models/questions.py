from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.db.database import Base


class Question(Base):
    """
    Quiz Question database representation.
    """

    __tablename__ = "Question"

    idQuestion = Column(Integer, primary_key=True, index=True)
    questionText = Column(String)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    idTest = Column(Integer, ForeignKey("Test.idTest"))

    test = relationship("Test", back_populates="questions")
    answers = relationship("Answer", back_populates="question")
