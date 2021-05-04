from starlette.websockets import WebSocket


class ConnectionData:
    def __init__(self, websocket: WebSocket, name: str, quantity_questions: int):
        self.websocket = websocket
        self.__name = name
        self.__quantity_questions = quantity_questions
        self.__rigth_answers = 0
        self.__responded_questions = 0

    @property
    def rigth_answers(self):
        return self.__rigth_answers

    def add_rigth_answer(self):
        self.__rigth_answers += 1

    @property
    def name(self):
        return self.__name

    @property
    def responded_questions(self):
        return self.__responded_questions

    def add_responded_questions(self):
        self.__responded_questions += 1

    @property
    def quantity_questions(self):
        return self.__quantity_questions
