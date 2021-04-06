from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
import uuid

from app.db.database import Base


def generate_uuid():
    return str(uuid.uuid4())


class User(Base):
    """
    App's User database representation.
    """

    __tablename__ = "User"

    idUser = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, name="uuid", default=generate_uuid)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    password = Column(String)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    tests = relationship("Test", back_populates="owner")
    rooms = relationship("Room", back_populates="owner")
