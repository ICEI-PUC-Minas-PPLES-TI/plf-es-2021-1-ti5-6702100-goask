from fastapi import APIRouter

from app.routers import users

app_routers = APIRouter()
app_routers.include_router(users.router, prefix="/users", tags=["users"])
