from fastapi import Depends
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from app.core import db_config

# Core interface to the database itself.
engine = create_engine(db_config.DATABASE_URL())

# Each instance of SessionLocal wil be a database session.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Creating a base class to each database model class.
Base = declarative_base()
