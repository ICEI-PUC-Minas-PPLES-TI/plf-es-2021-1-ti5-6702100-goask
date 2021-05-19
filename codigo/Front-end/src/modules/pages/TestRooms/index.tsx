import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "../../components/ContextWrapper";
import { useEffect, useState } from "react";

//From models
import { Test } from "@models/Test";
import { Room } from "@models/Room";

//API
import { getTest,getRooms } from "../../../share/api/api";

//Components
import Title from "../../components/Title";
import TestRoomsTable from "../../components/TestRoomsTable";



const TestRoomsPage: React.FC = () => {
  const context = useAppContext();
  const router = useRouter();
  const [rooms, setRooms] = useState<Room[]>();
  const [test, setTest] = useState<Test>();

  const render = async () => {
    const roomsResponse = await getRooms(context.token);
    setRooms(roomsResponse);
    const { id } = router.query;
    if (id) {
      const idNumber = Number.parseInt(id.toString());
      const testResult = await getTest(context.token, idNumber);
      setTest(testResult);
    }
  };

  useEffect(() => {
    render();
  }, []);

    if(test){
      return (
        <styles.Container>
        <div>
          <Title>Salas do Quiz</Title>
        </div>
        <styles.TextContainer>
          <h2>{test.name}</h2>
          <p>Veja aqui todas as salas do quiz</p>
        </styles.TextContainer>
        <styles.ContentContainer>
          <TestRoomsTable test={test} rooms={rooms}/>
        </styles.ContentContainer>
      </styles.Container>
      );
    } else 
       return(
         <></>
       )
  };
  
  export default TestRoomsPage;