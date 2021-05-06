import {getWebSocket} from '.';
import store from '../store';
import {
  startQuiz,
  setError,
  setResults,
  open,
  create,
  clearConnection,
} from '../store/webSocketSlice';

export interface WSMessageMobile {
  room_id: string;
  action: 'connect' | 'disconnect' | 'receive_res';
  name: string;
  question_id?: string;
  is_correct?: 0 | 1;
}

export interface WSMessageServer {
  room_id: string;
  action: 'send_results' | 'actived' | 'connect';
  results?: {name: string; right_answers: string}[];
  error?: {isError: 0 | 1; message: string};
}

class AppWebSocket {
  private static _instance: AppWebSocket | null;
  private _connection: WebSocket;

  private constructor() {
    store.dispatch(create({}));
    this._connection = getWebSocket();
    this._connection.onopen = () => {
      console.log('[WebSocket] Connection Opened');
      store.dispatch(open({}));
    };
    this._connection.onmessage = (event) => {
      const message = JSON.parse(event.data as string) as WSMessageServer;
      console.log('[WebSocket] New message arrived: ');
      console.log(message);
      switch (message.action) {
        case 'connect':
          if (message.error && message.error.message) {
            store.dispatch(
              setError(
                'Infelizmente, já existe um usuário com este nome conectado :/',
              ),
            );
          }
          break;
        case 'actived':
          store.dispatch(startQuiz({}));
          break;
        case 'send_results':
          store.dispatch(setResults(message.results!));
          break;
      }
    };
  }

  public static init() {
    console.log('[WebSocket] Initializing');
    this._instance || (this._instance = new this());
  }

  public static addOnMessageCallBack(
    onMessage: (event: WebSocketMessageEvent) => void,
  ) {
    if (this._instance) {
      this._instance._connection.onmessage = onMessage;
    }
  }

  public static sendMessage(data: WSMessageMobile) {
    console.log('[WebSocket] Sending message');
    console.log(data);
    if (this._instance) {
      this._instance._connection.send(JSON.stringify(data));
    }
  }

  public static sendConnectMessage() {
    console.log('[WebSocket] Sending connect message');
    const name = store.getState().users.userName;
    const room_id = store.getState().room.room?.idRoom?.toString() as string;
    this.sendMessage({
      action: 'connect',
      name: name,
      room_id: room_id,
    });
  }

  public static sendAnswer(isCorrect: boolean) {
    console.log('[WebSocket] Sending answer message');
    const name = store.getState().users.userName;
    const room_id = store.getState().room.room?.idRoom?.toString() as string;
    this.sendMessage({
      action: 'receive_res',
      name: name,
      room_id: room_id,
      is_correct: isCorrect ? 1 : 0,
    });
  }

  public static close() {
    console.log('[WebSocket] Closing');
    store.dispatch(clearConnection({}));
    if (this._instance) {
      if (this._instance._connection) {
        this._instance._connection.close();
      }
      this._instance = null;
    }
  }
}

export default AppWebSocket;
