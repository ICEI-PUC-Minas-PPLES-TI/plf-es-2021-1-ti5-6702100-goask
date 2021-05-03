from typing import Dict, List
from ast import literal_eval

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router_ws = APIRouter()


class ConnectionData:
    def __init__(self, websocket: WebSocket, name: str):
        self.websocket = websocket
        self.name = name
        self.righ_answers = 0


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

    async def disconnect(self, data_dict: {}):
        self.active_connections.get(data_dict.get('room_id')).pop(data_dict.get('name'))
        if len(self.active_connections.get(data_dict.get('room_id'))) == 0:
            self.active_connections.pop(data_dict('room_id'))

    # async def (self, message: str, websocket: WebSocket):
    #     await websocket.send_text(message)

    async def broadcast(self, key: str, message: str):
        for connection in self.active_connections[key]:
            await connection.websocket.send_text(message)


manager = ConnectionManager()


@router_ws.websocket("")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data_dict = literal_eval(await websocket.receive_text())
            if data_dict.get('action') == 'connect':  # Falta verificar se  o dono da room que est entrando
                await manager.add(websocket, data_dict)
            elif data_dict.get('action') == 'disconnect':
                await manager.disconnect(data_dict)
            elif data_dict.get('action') == 'receive_res':
                pass
            elif data_dict.get('action') == 'send_result':
                pass
            await manager.broadcast(data_dict['room_id'], "Message: {data_json['message']}")
    except WebSocketDisconnect:
        pass
        # manager.disconnect(websocket)
        # await manager.broadcast(data_dict['room_id'], f"Client {data_dict['room_id']} left the chat")
