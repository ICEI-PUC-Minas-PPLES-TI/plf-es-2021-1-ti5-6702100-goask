from ast import literal_eval

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from app.websocket.connection_manager import ConnectionManager

router_ws = APIRouter()

manager = ConnectionManager()
ownerManager = ConnectionManager()


# data_dict
# @actions connect, disconnect, resceive_res
# @params *action* , *name*, *room_id*, ?is_correct? ?results? = [{name: str, right_answers: str}]


@router_ws.websocket("")
async def websocket_endpoint(websocket: WebSocket):
    await manager.enter(websocket)
    try:
        while True:
            data_dict = literal_eval(await websocket.receive_text())
            if data_dict.get('action') == 'connect':
                await manager.connect(websocket, data_dict)
            elif data_dict.get('action') == 'disconnect':
                await manager.disconnect(data_dict)
            elif data_dict.get('action') == 'receive_res':
                await manager.add_rigth_answer(data_dict)
    except WebSocketDisconnect:
        pass


# data_dict
# @actions connect, disconnect
# @params *action* , *owner_id*, *room_id*


@router_ws.websocket("/owner")
async def websocket_endpoint(websocket: WebSocket):
    await manager.enter(websocket)
    try:
        while True:
            data_dict = literal_eval(await websocket.receive_text())
            if data_dict.get('action') == 'connect':
                await manager.add_owner(websocket, data_dict)
            elif data_dict.get('action') == 'disconnect':
                await manager.disconnect_owner(data_dict)
            elif data_dict.get('action') == 'active':
                await manager.send_ative_room(data_dict)
    except WebSocketDisconnect:
        pass
