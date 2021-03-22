from fastapi import Depends
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from app.core import config

# Local PostgreSQL URL (change it in production)
# SQLACHEMY_DATABASE_URL = 'postgresql+psycopg2://goask:goasksenha@152.67.33.12:13122/goask'


# Core interface to the database itself.
engine = create_engine(config.DATABASE_URL())

# Each instance of SessionLocal wil be a database session.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Creating a base class to each database model class.
Base = declarative_base()
