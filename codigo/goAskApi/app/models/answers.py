from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.db.database import Base


class Answer(Base):
    """
    Question's Answer database representation.
    """

    __tablename__ = "Answer"

    idAnswer = Column(Integer, primary_key=True, index=True)
    isCorrect = Column(Boolean)
    answerText = Column(String)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    idQuestion = Column(Integer, ForeignKey("Question.idQuestion", ondelete='CASCADE'))

    question = relationship("Question", back_populates="answers", lazy='joined')
