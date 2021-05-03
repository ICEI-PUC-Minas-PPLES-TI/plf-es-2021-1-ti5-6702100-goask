from starlette.websockets import WebSocket


class ConnectionData:
    def __init__(self, websocket: WebSocket, name: str):
        self.websocket = websocket
        self.__name = name
        self.__rigth_answers = 0

    @property
    def rigth_answers(self):
        return self.__rigth_answers

    def add_rigth_answer(self):
        self.__rigth_answers += 1

    @property
    def name(self):
        return self.__name
