from starlette.websockets import WebSocket


class ConnectionOwnerData:
    def __init__(self, websocket: WebSocket, room_id: str):
        self.websocket = websocket
        self.__room_id = room_id

    @property
    def room_id(self):
        return self.__room_id

