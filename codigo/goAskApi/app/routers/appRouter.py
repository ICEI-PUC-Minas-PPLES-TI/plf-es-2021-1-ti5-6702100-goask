from fastapi import APIRouter

from app.routers import users, root, categories,tests

app_routers = APIRouter()
app_routers.include_router(root.router)
app_routers.include_router(users.router, prefix="/users", tags=["users"])
app_routers.include_router(categories.router, prefix="/categories", tags=["categories"])
app_routers.include_router(tests.router, prefix="/tests", tags=["tests"])
