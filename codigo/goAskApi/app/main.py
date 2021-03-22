from fastapi import FastAPI
from app.routers.appRouter import app_routers
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.include_router(app_routers)
