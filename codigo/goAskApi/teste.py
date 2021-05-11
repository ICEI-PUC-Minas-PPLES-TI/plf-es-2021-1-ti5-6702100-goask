from fastapi import FastAPI

from fastapi.responses import HTMLResponse

app = FastAPI()

html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <h2>Your ID: <span id="ws-id"></span></h2>
        <button onclick="desconectar(event)">desconectar</button>
        <button onclick="receive_res(event)">manda resposta</button>
        <button onclick="send_result(event)">manda resultado</button>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var client_id = Date.now()
            document.querySelector("#ws-id").textContent = client_id;
            var ws = new WebSocket(`ws://127.0.0.1:8000/ws`);
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                let input = document.getElementById("messageText")
                let send = {"room_id": "6", "name": input.value, "action": "connect"}
                ws.send(JSON.stringify(send))
                input.value = ''
                event.preventDefault()
            }
            function desconectar(event) {
                let input = document.getElementById("messageText")
                let send = {"room_id": "6", "name": input.value, "action": "disconnect"}
                ws.send(JSON.stringify(send))
            };
            function receive_res(event) {
                let input = document.getElementById("messageText")
                let send = {"room_id": "6", "name": input.value, "action": "receive_res", "is_correct": 1}
                ws.send(JSON.stringify(send))
            }
            function send_result(event) {
                let input = document.getElementById("messageText")
                let send = {"room_id": "6", "name": input.value, "action": "send_result",}
                ws.send(JSON.stringify(send)) 
            }
        </script>
    </body>
</html>
"""


@app.get("/")
async def get():
    return HTMLResponse(html)
