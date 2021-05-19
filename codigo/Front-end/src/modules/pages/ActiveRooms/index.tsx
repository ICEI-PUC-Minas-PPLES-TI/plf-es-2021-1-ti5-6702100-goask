import * as styles from "./styles";

//Hooks
import { useAppContext } from "../../components/ContextWrapper";
import { useEffect, useState } from "react";

//api
import { getTests,getRooms } from "../../../share/api/api";

//Models
import { Room } from "@models/Room";
import { Test } from "@models/Test";

//Components
import ActiveRoomsTable from "../../components/ActctiveRoomsTable";
import Title from "../../components/Title";


const ActiveRoomPage: React.FC = () => {
    const context = useAppContext();
    const [tests, setTests] = useState<Test[]>();
    const [rooms, setRooms] = useState<Room[]>();
  
    const render = async () => {
      const testsResponse = await getTests(context.token);
      setTests(testsResponse);
      const roomsResponse = await getRooms(context.token);
      setRooms(roomsResponse);
    };
    useEffect(() => {
        render();
    }, []); 

    if(rooms){

        return (
        <styles.Container>
        <div>
          <Title>Salas Ativas</Title>
        </div>
        <styles.TextContainer>
          <h2>O que temos aqui?</h2>
          <p>Abaixo são exibidas todas as suas salas que encontram-se ativas</p>
        </styles.TextContainer>
        <styles.ContentContainer>
          <ActiveRoomsTable tests={tests} rooms={rooms} />
        </styles.ContentContainer>
        </styles.Container>
        )
    } else 
       return<></>

}

export default ActiveRoomPage;