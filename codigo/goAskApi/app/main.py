from fastapi import FastAPI
from dotenv import load_dotenv

from app.routers.appRouter import app_routers
from app.models import users, questions, tests, rooms, answers, categories
from app.db.database import engine

load_dotenv()

app = FastAPI()

app.include_router(app_routers)

users.Base.metadata.create_all(bind=engine)
questions.Base.metadata.create_all(bind=engine)
tests.Base.metadata.create_all(bind=engine)
rooms.Base.metadata.create_all(bind=engine)
answers.Base.metadata.create_all(bind=engine)
categories.Base.metadata.create_all(bind=engine)
