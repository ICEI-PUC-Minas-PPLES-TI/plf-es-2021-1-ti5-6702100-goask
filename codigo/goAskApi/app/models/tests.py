from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.db.database import Base


class Test(Base):
    """
    Quiz format database representation.
    """

    __tablename__ = "Test"

    idTest = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    idCategory = Column(Integer, ForeignKey("Category.idCategory"))
    idUser = Column(Integer, ForeignKey("User.idUser"))

    owner = relationship("User", back_populates="tests")
    category = relationship("Category", back_populates="tests")
    questions = relationship("Question", back_populates="test")
