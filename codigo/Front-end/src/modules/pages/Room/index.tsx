import * as styles from "./styles";

//Hooks
import { useAppContext } from "../../components/ContextWrapper";
import { useRouter } from "next/router";
import React, { useEffect,useState } from "react";

//Models
import { Room } from "@models/Room";

import { getRoom,startRoom,desactivateRoom } from "src/share/api/api";

//Components
import Link from "next/link";


const RoomPage: React.FC = () => {
    const context = useAppContext();
    const router = useRouter();
    const [room, setRoom] = useState<Room>();
    const [run, setRunning] = useState<boolean>(false)
    
    const render = async () => {
        const { id } = router.query;
        if (id) {
          const idNumber = Number.parseInt(id.toString());
          const roomResp:Room = await getRoom(context.token,idNumber);
          console.log("RESPONSE -> ", roomResp)
          setRoom(roomResp)
          console.log("ROOM -> ", room)
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
        console.log(roomDesativated);
      }
      useEffect(() => {
        render(); 
      }, []);
      
      if(!room){
        return (<h1>teste</h1>)
      }
      return(
        <styles.Container>
        <styles.SubHeader>
        <styles.TitleContainer>
          <h1>Sala {room.name}</h1>
        </styles.TitleContainer>
        <styles.ButtonContainer>
          <styles.Button onClick={iniciateRoom}>
            <p>{run? "Parar" : "Iniciar"}</p>
          </styles.Button>

          <styles.Button onClick={dasativate}>
            <Link href="/">
              <p>Desativar Sala</p>
            </Link>
          </styles.Button>
        </styles.ButtonContainer>
      </styles.SubHeader>
      <styles.TextContainer>
          <h2>Sala Criada por: {context.user.name}</h2>
          <p>Codigo de acesso a sala: {room.idRoom}</p>
      </styles.TextContainer>

      </styles.Container>
      )
    
    
}

export default RoomPage;