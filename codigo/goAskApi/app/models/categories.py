from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.db.database import Base


class Category(Base):
    """
    Quizz category database representation.
    """

    __tablename__ = "Category"

    idCategory = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)

    tests = relationship("Test", back_populates="category", lazy='joined', cascade="all, delete-orphan",
                         passive_deletes=True)
