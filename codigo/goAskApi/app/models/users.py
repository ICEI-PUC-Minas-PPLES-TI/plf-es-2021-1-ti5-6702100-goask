from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.db.database import Base


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
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    tests = relationship("Test", back_populates="owner")
    rooms = relationship("Room", back_populates="owner")
