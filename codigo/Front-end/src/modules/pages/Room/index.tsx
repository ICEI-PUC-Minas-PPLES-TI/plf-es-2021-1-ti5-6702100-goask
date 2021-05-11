import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

//Components
import { useAppContext } from "../../components/ContextWrapper";
import TitleRainbow from "../../components/TitleRainbow";
//Models
import { Room } from "../../../models/Room";

import { getRoom, startRoom } from "../../../share/api/api";

const RoomPage: React.FC = () => {
  const context = useAppContext();
  const router = useRouter();
  const [room, setRoom] = useState<Room>();
  const [message, setMessage] = useState<string>("Carregando sala...");
  const [players, setPlayers] = useState([]);
  const render = async () => {
    const { id } = router.query;
    if (id) {
      const idNumber = Number.parseInt(id.toString());
      const roomResp: Room = await getRoom(context.token, idNumber);
      if (roomResp) {
        setRoom(roomResp);
      } else setMessage("Não foi possível encontrar a sala :(");
    }
  };

  useEffect(() => {
    render();
  }, []);

  const selectStatus = (): string => {
    if (room.isRunning) {
      return "Aguardando Respostas...";
    } else if (room.isActive) {
      return "Aguardando Jogadores...";
    } else {
      return "Sala Finalizada";
    }
  };

  if (!room) {
    return <h1>{message}</h1>;
  }

  const ws = new WebSocket("ws://127.0.0.1:8000/ws/owner");

  if (!players.length) {
    ws.onopen = function name(event) {
      ws.send(
        JSON.stringify({
          owner_id: String(context.user.idUser),
          room_id: String(room.idRoom),
          action: "disconnect",
        })
      );

      ws.send(
        JSON.stringify({
          owner_id: String(context.user.idUser),
          room_id: String(room.idRoom),
          action: "connect",
        })
      );
    };
  }

  const receiveData = () =>
    new Promise((resolve, reject) => {
      ws.onmessage = function (event) {
        const data = JSON.parse(event.data);
        setPlayers(data);
      };
    });

  receiveData();

  const waitForSocketConnection = (socket, callback) => {
    setTimeout(() => {
      if (socket.readyState === 1) {
        if (callback !== undefined) {
          callback();
        }
        return;
      } else {
        waitForSocketConnection(socket, callback);
      }
    }, 5);
  };

  const iniciateRoom = async (ws: WebSocket) => {
    const roomId = room.idRoom;
    const roomStarted = await startRoom(context.token, roomId, false);
    setRoom(roomStarted);
    waitForSocketConnection(ws, function name(event) {
      ws.send(
        JSON.stringify({
          owner_id: String(context.user.idUser),
          room_id: String(room.idRoom),
          action: "active",
        })
      );
    });
  };

  const makeDate = () => {
    if (room) {
      const date = new Date(room.createdAt);
      return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    } else {
      return new Date(0, 0, 0);
    }
  };

  return (
    <styles.Container>
      <styles.SubHeader>
        <styles.TitleContainer>
          <h1>
            {room.name} <span>#{room.idRoom}</span>
          </h1>
        </styles.TitleContainer>
        <styles.ButtonContainer
          disabledStyle={!room.isActive || room.isRunning}
        >
          <div>
            <styles.Button
              onClick={() => iniciateRoom(ws)}
              disabled={room.isActive || room.isRunning}
            >
              <p>
                {!room.isActive || room.isRunning ? "Já Iniciado" : "Iniciar"}
              </p>
            </styles.Button>
          </div>
        </styles.ButtonContainer>
      </styles.SubHeader>
      <styles.TextContainer>
        <h2>
          Codigo de acesso a sala: <TitleRainbow text={room && room.name} />
        </h2>
      </styles.TextContainer>
      <styles.TextContainer>
        <TitleRainbow text={room && selectStatus()} />
        <h2>
          {players ? (players.length > 1 ? "Usuarios" : "Usuário") : "Usuário"}{" "}
          na Sala ({players?.length || 0}):
        </h2>
        {!!players.length && 
          players.map(player => <p key={player.name}>{player.name}</p>)
        }
      </styles.TextContainer>
      <styles.TextContainer>
        <p>
          Sala Criada por <span>{context.user.name}</span>, no dia
          <span> {makeDate()}</span>
        </p>
      </styles.TextContainer>
    </styles.Container>
  );
};

export default RoomPage;
