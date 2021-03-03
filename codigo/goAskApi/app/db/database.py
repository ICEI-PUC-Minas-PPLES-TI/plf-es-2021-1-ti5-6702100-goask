from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Local PostgreSQL URL (change it in production)
SQLACHEMY_DATABASE_URL = 'postgresql://root:56gplol!tlg@postgresserver/db'

# Core interface to the database itself.
engine = create_engine(SQLACHEMY_DATABASE_URL)

# Each instance of SessionLocal wil be a database session.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Creating a base class to each database model class.
Base = declarative_base()