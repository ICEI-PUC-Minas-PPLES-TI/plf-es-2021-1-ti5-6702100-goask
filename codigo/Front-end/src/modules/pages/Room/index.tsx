import * as styles from "./styles";

//Hooks
import { useAppContext } from "../../components/ContextWrapper";
import { useRouter } from "next/router";
import React, { useEffect,useState } from "react";

//Models
import { Room } from "@models/Room";

import { getRoom,startRoom,desactivateRoom } from "src/share/api/api";

const RoomPage: React.FC = () => {
    const context = useAppContext();
    const router = useRouter();
    const [room, setRoom] = useState<Room>();
    const [players, setPlayers] = useState([]);
    const [run, setRunning] = useState<boolean>(false)
    
    const render = async () => {
        const { id } = router.query;
        if (id) {
          const idNumber = Number.parseInt(id.toString());
          const roomResp:Room = await getRoom(context.token,idNumber);
          setRoom(roomResp)
        }

      };

      const iniciateRoom = async () => {
        const roomId = room.idRoom
        const roomStarted = await startRoom(context.token,roomId,run);
        setRunning(roomStarted.isRunning);
        setRoom(roomStarted)
      }

      const dasativate = async () => {
        const roomId = room.idRoom
        const roomDesativated = await desactivateRoom(context.token,roomId);
      }
      useEffect(() => {
        render(); 
      }, []);
      
      if(!room){
        return (<h1>teste</h1>)
      }

      const ws = new WebSocket("ws://127.0.0.1:8000/ws/owner")
     
      ws.onopen = function name(event) {
        ws.send(JSON.stringify({"owner_id": String(context.user.idUser), "room_id": String(room.idRoom), "action": "disconnect"}))
        
        ws.send(JSON.stringify({"owner_id": String(context.user.idUser), "room_id": String(room.idRoom), "action": "connect"}))
      }

      const receiveMessage = () => new Promise((resolve, reject) =>{
          ws.onmessage = function(event) {
            const data = JSON.parse(event.data)
            setPlayers(data)
          };
      })

      receiveMessage()
      

      return ( 
      <styles.Container>
        <styles.SubHeader>
        <styles.TitleContainer>
          <h1>Sala {room.name}</h1>
        </styles.TitleContainer>
        <styles.ButtonContainer>
          <styles.Button onClick={iniciateRoom} disabled={run}>
            <p>Iniciar</p>
          </styles.Button>
         </styles.ButtonContainer>
        </styles.SubHeader>
        <styles.TextContainer>
          <h2>Sala Criada por: {context.user.name}</h2>
          <p>Codigo de acesso a sala: {room.idRoom}</p>
        </styles.TextContainer>
        <styles.TextContainer>
          <h2>Usuarios esperando:</h2>
          {players && 
            players.map(player => <p key={player.name}>{player.name}</p>)
          }
        </styles.TextContainer>
      </styles.Container>
      )
}

export default RoomPage;