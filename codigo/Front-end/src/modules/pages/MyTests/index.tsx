import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "../../components/ContextWrapper";

//From next
import Link from "next/link";

//Components
import Button from "../../components/Button";
import IconData from "../../components/IconDataContainer";
import Title from "../../components/Title";
import TestsTable from "../../components/TestsTable";

//API
import { getTests } from "../../../share/api/api";
import { Test } from "@models/Test";
import { useEffect, useState } from "react";

const MyTestsPage: React.FC = () => {
  const router = useRouter();
  const context = useAppContext();
  const [tests, setTests] = useState<Test[]>();

  const render = async () => {
    const testsResponse: Test[] = await getTests(context.token);
    setTests(testsResponse);
  };

  useEffect(() => {
    render();
  }, []);

  return tests ? (
    <styles.Container>
      <div>
        <Title>Meus quizes</Title>
        <Link href="/createtest">
          <a>
            <Button text="Criar quiz" />
          </a>
        </Link>
      </div>
      <styles.ContentContainer>
        <IconData
          text={tests.length !== 1 ? "Quizes criados" : "Quiz criado"}
          icon="/quizes.svg"
          alt="quizes"
          value={tests.length}
        />
      </styles.ContentContainer>
      <styles.ContentContainer>
        <TestsTable tests={tests} />
      </styles.ContentContainer>
    </styles.Container>
  ) : (
    <></>
  );
};

export default MyTestsPage;
