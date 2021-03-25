from fastapi import APIRouter

from app.routers import users, root

app_routers = APIRouter()
app_routers.include_router(root.router)
app_routers.include_router(users.router, prefix="/users", tags=["users"])
