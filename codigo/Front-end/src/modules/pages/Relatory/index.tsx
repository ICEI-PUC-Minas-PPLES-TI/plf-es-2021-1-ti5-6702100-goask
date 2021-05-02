import * as styles from "./styles";

//Models
import { Test } from "@models/Test";

//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "../../components/ContextWrapper";
import { useEffect, useState } from "react";

//From next
import Link from "next/link";

//Components
import Title from "../../components/Title";
import RelatoryTable from "../../components/RelatoryTable";

//API
import { getTests } from "../../../share/api/api";

const RelatoryPage: React.FC = () => {
  const context = useAppContext();
  const [tests, setTests] = useState<Test[]>();

  const render = async () => {
    const testsResponse: Test[] = await getTests(context.token);
    setTests(testsResponse);
  };

  useEffect(() => {
    render();
  }, []);

  if (tests) {
    return (
      <styles.Container>
        <div>
          <Title>Relatório</Title>
        </div>
        <styles.TextContainer>
          <h1>O que é o relatório?</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          consequuntur ducimus, deleniti ea similique numquam odio temporibus
          quia molestiae animi totam eveniet eius ratione voluptatem provident.
          Nihil voluptate fugit voluptatum.
        </styles.TextContainer>
        <styles.ContentContainer>
          <RelatoryTable tests={tests} />
        </styles.ContentContainer>
      </styles.Container>
    );
  } else {
    return <></>;
  }
};

export default RelatoryPage;
