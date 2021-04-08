from sqlalchemy import Column, Integer, String, DateTime, Date, Boolean, ForeignKey
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
    isActive = Column(Boolean)
    isRunning = Column(Boolean)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    idUser = Column(Integer, ForeignKey("User.idUser", ondelete='CASCADE'))

    owner = relationship("User", back_populates="rooms", lazy='joined')
