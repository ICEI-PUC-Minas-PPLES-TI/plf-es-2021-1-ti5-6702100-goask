from typing import Dict

from starlette.websockets import WebSocket

from app.websocket.connection_data import ConnectionData


class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, Dict[str, ConnectionData]] = {}

    async def connect(self, websocket: WebSocket):
        await websocket.accept()

    async def add(self, websocket: WebSocket, data_dict: {}):
        if self.active_connections.get(data_dict.get('room_id')) is None:
            self.active_connections[data_dict['room_id']] = {}
        connection = ConnectionData(websocket, data_dict.get('name'))
        self.active_connections.get(data_dict.get('room_id'))[data_dict.get('name')] = connection

    async def add_rigth_answer(self, data_dict: {}):
        if data_dict.get('is_correct'):
            self.active_connections.get(data_dict.get('room_id')).get(data_dict.get('name')).add_rigth_answer()

    async def disconnect(self, data_dict: {}):
        self.active_connections.get(data_dict.get('room_id')).pop(data_dict.get('name'))
        if len(self.active_connections.get(data_dict.get('room_id'))) == 0:
            self.active_connections.pop(data_dict('room_id'))

    async def send_result(self, data_dict: {}):
        res = []
        keys = self.active_connections..keys()
        for key in keys:
            data = {'name': connection.get(key).name, 'rigth_answers': connection.get(key).rigth_answers}
            res.append(data)
        for connection in self.active_connections.get(data_dict.get('room_id')):
            await connection.websocket.send_text(str(res))

    async def broadcast(self, key: str, message: str):
        for connection in self.active_connections[key]:
            await connection.websocket.send_text(message)