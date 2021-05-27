import * as styles from "./styles";

//Models
import { Test } from "@models/Test";
import { Room } from "@models/Room";

//Hooks
import { useAppContext } from "../../components/ContextWrapper";
import { useEffect, useState } from "react";

//Components
import Title from "../../components/Title";
import RelatoryTable from "../../components/RelatoryTable";
import RoomsTable from "../../components/RoomsTable";

//API
import { getTests, getRooms } from "../../../share/api/api";

const RelatoryPage: React.FC = () => {
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

  if (tests && rooms) {
    return (
      <styles.Container>
        <div>
          <Title>Relatório</Title>
        </div>
        <styles.TextContainer>
          <h2>O que é o relatório?</h2>
          <p>O relatório mostra alguns dados estatíticos de seus quizzes.</p>
        </styles.TextContainer>
        <styles.ContentTableContainer>
          <RelatoryTable tests={tests} rooms={rooms} />
        </styles.ContentTableContainer>

        <styles.TextContainer>
          <h2>Histórico de salas</h2>
          <p>Esse é um registro com todas as salas que você criou!</p>
        </styles.TextContainer>
        <styles.ContentTableContainer>
          <RoomsTable rooms={rooms} tests={tests} />
        </styles.ContentTableContainer>
      </styles.Container>
    );
  } else {
    return <></>;
  }
};

export default RelatoryPage;
