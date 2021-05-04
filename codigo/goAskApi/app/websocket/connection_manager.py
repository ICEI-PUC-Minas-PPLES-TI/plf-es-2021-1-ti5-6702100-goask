from typing import Dict

from starlette.websockets import WebSocket

from app.websocket.connection_data import ConnectionData
from app.websocket.connection_db import save_room_data, get_number_of_questions


class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, Dict[str, ConnectionData]] = {}

    async def connect(self, websocket: WebSocket):
        await websocket.accept()

    async def add(self, websocket: WebSocket, data_dict: {}):
        if self.active_connections.get(data_dict.get('room_id')) is None:
            self.active_connections[data_dict['room_id']] = {}
        connections = self.active_connections.get(data_dict.get('room_id'))
        keys = connections.keys()
        is_exist: bool = False
        for key in keys:
            if key == data_dict.get('name'):
                is_exist = True
        await get_number_of_questions(data_dict)
        if not is_exist:
            connection = ConnectionData(websocket, data_dict.get('name'), 2)
            self.active_connections.get(data_dict.get('room_id'))[data_dict.get('name')] = connection
        else:
            return await websocket.send_text(str({"error": True, "Message": "Name already exist"}))

    async def disconnect(self, data_dict: {}):
        self.active_connections.get(data_dict.get('room_id')).pop(data_dict.get('name'))
        if len(self.active_connections.get(data_dict.get('room_id'))) == 0:
            self.active_connections.pop(data_dict.get('room_id'))

    async def add_rigth_answer(self, data_dict: {}):
        if data_dict.get('is_correct') == 1:
            self.active_connections.get(data_dict.get('room_id')).get(data_dict.get('name')).add_rigth_answer()

    async def send_result(self, data_dict: {}):
        res = []
        connections = self.active_connections.get(data_dict.get('room_id'))
        keys = connections.keys()
        for key in keys:
            data = {'name': connections.get(key).name, 'rigth_answers': connections.get(key).rigth_answers}
            res.append(data)
        await save_room_data(res, data_dict)
        for key in keys:
            await connections.get(key).websocket.send_text(str(res))

    async def broadcast(self, key: str, message: str):
        connections = self.active_connections.get(key)
        if connections is not None:
            keys = connections.keys()
            for key in keys:
                await connections.get(key).websocket.send_text(str(message))
