from typing import Dict

from starlette.websockets import WebSocket

from app.websocket.connection_data import ConnectionData
from app.websocket.connection_owner_data import ConnectionOwnerData
from app.websocket.connection_db import save_room_data, get_number_of_questions


class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, Dict[str, ConnectionData]] = {}
        self.owner_connections: Dict[str, ConnectionOwnerData] = {}

    async def enter(self, websocket: WebSocket):
        await websocket.accept()

    async def connect(self, websocket: WebSocket, data_dict: {}):
        if self.active_connections.get(data_dict.get('room_id')) is None:
            self.active_connections[data_dict['room_id']] = {}
        connections = self.active_connections.get(data_dict.get('room_id'))
        keys = connections.keys()
        is_exist: bool = False
        for key in keys:
            if key == data_dict.get('name'):
                is_exist = True
        if not is_exist:
            quantity_questions = await get_number_of_questions(data_dict)
            connection = ConnectionData(websocket, data_dict.get('name'), quantity_questions)
            self.active_connections.get(data_dict.get('room_id'))[data_dict.get('name')] = connection
            owner_keys = self.owner_connections.keys()
            for owner_key in owner_keys:
                if self.owner_connections.get(owner_key).room_id == data_dict.get('room_id'):
                    res = []
                    for key in keys:
                        res.append({"name": connections.get(key).name})
                    await self.owner_connections.get(owner_key).websocket.send_json(res)
        else:
            return await websocket.send_json(
                {"room_id": data_dict.get('room_id'),
                 "action": data_dict.get('actiond'),
                 "error": {
                     "isError": 1, "message": "Name already exist"
                 }
                 }
            )

    async def disconnect(self, data_dict: {}):
        self.active_connections.get(data_dict.get('room_id')).pop(data_dict.get('name'))
        if len(self.active_connections.get(data_dict.get('room_id'))) == 0:
            self.active_connections.pop(data_dict.get('room_id'))
        else:
            owner_keys = self.owner_connections.keys()
            for owner_key in owner_keys:
                if self.owner_connections.get(owner_key).room_id == data_dict.get('room_id'):
                    res = []
                    connections = self.active_connections.get(data_dict.get('room_id'))
                    keys = connections.keys()
                    for key in keys:
                        res.append({"name": connections.get(key).name})
                    await self.owner_connections.get(owner_key).websocket.send_json(res)

    async def add_rigth_answer(self, data_dict: {}):
        if data_dict.get('is_correct') == 1:
            self.active_connections.get(data_dict.get('room_id')).get(data_dict.get('name')).add_rigth_answer()
        self.active_connections.get(data_dict.get('room_id')).get(data_dict.get('name')).add_responded_questions()
        is_end = await self.__verify_end_quiz(data_dict)
        if is_end:
            await self.__send_data_result(data_dict)

    async def send_result(self, data_dict: {}):
        result_data = await self.__generate_result_data(data_dict)
        connections = self.active_connections.get(data_dict.get('room_id'))
        keys = connections.keys()
        for key in keys:
            await connections.get(key).websocket.send_json(result_data)
        for key in self.owner_connections.keys():
            if self.owner_connections.get(key).room_id == data_dict.get('room_id'):
                await self.owner_connections.get(key).websocket.send_json(result_data)

    async def send_ative_room(self, data_dict):
        connections = self.active_connections.get(data_dict.get('room_id'))
        keys = connections.keys()
        for key in keys:
            await connections.get(key).websocket.send_json({'actived': 1})

    async def add_owner(self, websocket: WebSocket, data_dict):
        owner_connection = ConnectionOwnerData(websocket, data_dict.get('room_id'))
        self.owner_connections[data_dict.get('owner_id')] = owner_connection
        connections = self.active_connections.get(data_dict.get('room_id'))
        if connections is not None:
            keys = connections.keys()
            res = []
            for key in keys:
                res.append({'name': connections.get(key).name})
            await websocket.send_json(res)

    async def disconnect_owner(self, data_dict):
        if self.owner_connections.get(data_dict.get('owner_id')) is not None:
            self.owner_connections.pop(data_dict.get('owner_id'))

    async def __verify_end_quiz(self, data_dict: {}):
        connections = self.active_connections.get(data_dict.get('room_id'))
        keys = connections.keys()
        is_end: bool = True
        for key in keys:
            if not connections.get(key).responded_questions == connections.get(key).quantity_questions:
                is_end = False
        return is_end

    async def __send_data_result(self, data_dict: {}):
        result_data = await self.__generate_result_data(data_dict)
        connections = self.active_connections.get(data_dict.get('room_id'))
        keys = connections.keys()
        for key in keys:
            await connections.get(key).websocket.send_json({
                "room_id": data_dict.get('room_id'),
                "action": 'send_results',
                "results": result_data
            })
        for key in self.owner_connections.keys():
            if self.owner_connections.get(key).room_id == data_dict.get('room_id'):
                await self.owner_connections.get(key).websocket.send_json(result_data)

    async def __generate_result_data(self, data_dict: {}):
        res = []
        connections = self.active_connections.get(data_dict.get('room_id'))
        keys = connections.keys()
        for key in keys:
            data = {'name': connections.get(key).name, 'rigth_answers': connections.get(key).rigth_answers}
            res.append(data)
        return res

    async def broadcast(self, key: str, message: str):
        connections = self.active_connections.get(key)
        if connections is not None:
            keys = connections.keys()
            for key in keys:
                await connections.get(key).websocket.send_text(str(message))
