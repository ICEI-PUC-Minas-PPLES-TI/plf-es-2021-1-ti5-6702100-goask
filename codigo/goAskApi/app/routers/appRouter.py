from fastapi import APIRouter

from app.routers import users, root, categories, tests, questions, room
from app.websocket import web_socket

app_routers = APIRouter()
app_routers.include_router(root.router)
app_routers.include_router(users.router, prefix="/users", tags=["users"])
app_routers.include_router(categories.router, prefix="/categories", tags=["categories"])
app_routers.include_router(tests.router, prefix="/tests", tags=["tests"])
app_routers.include_router(questions.router, prefix="/questions", tags=["questions"])
app_routers.include_router(room.router, prefix="/room", tags=["room"])
app_routers.include_router(web_socket.router_ws, prefix="/ws", tags=["web_socket"])
