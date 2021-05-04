from ast import literal_eval

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from app.websocket.connection_manager import ConnectionManager

router_ws = APIRouter()

manager = ConnectionManager()


# data_dict
# @actions connect, disconnect, resceive_res, send_result
# @params *action* , *name*, *room_id*, is_correct

# FALTA
# Vericar a quantidade de questoes
# Enviar mensagem ao final do teste automatico

@router_ws.websocket("")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data_dict = literal_eval(await websocket.receive_text())
            if data_dict.get('action') == 'connect':
                await manager.add(websocket, data_dict)
            elif data_dict.get('action') == 'disconnect':
                await manager.disconnect(data_dict)
            elif data_dict.get('action') == 'receive_res':
                await manager.add_rigth_answer(data_dict)
            elif data_dict.get('action') == 'send_result':
                await manager.send_result(data_dict)
            # await manager.broadcast(data_dict['room_id'], f"Message: {data_dict['name']}")
    except WebSocketDisconnect:
        pass
