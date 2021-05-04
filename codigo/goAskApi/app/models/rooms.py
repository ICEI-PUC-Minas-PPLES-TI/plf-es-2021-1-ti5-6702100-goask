from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey, JSON
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.db.database import Base


class Room(Base):
    """
    Quiz Room database representation.
    """

    __tablename__ = "Room"

    idRoom = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    isActive = Column(Boolean, default=True)
    isRunning = Column(Boolean, default=False)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    idUser = Column(Integer, ForeignKey("User.idUser", ondelete='CASCADE'))
    idTest = Column(Integer, ForeignKey("Test.idTest"))
    roomdata = Column(JSON)

    owner = relationship("User", back_populates="rooms", lazy='joined')
    test = relationship("Test", back_populates="rooms", lazy='joined')
