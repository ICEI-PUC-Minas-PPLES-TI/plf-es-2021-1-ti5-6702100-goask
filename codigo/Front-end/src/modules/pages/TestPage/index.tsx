import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "../../components/ContextWrapper";
import { useEffect, useState } from "react";

//From models
import { Test } from "@models/Test";

//Components
import Button from "../../components/Button";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Snackbar from "../../components/SnackBar";

//API
import { getTest } from "../../../share/api/api";

const MyTestsPage: React.FC = () => {
  const router = useRouter();
  const context = useAppContext();
  const [errorEdit, setErrorEdit] = useState(false);
  const [test, setTest] = useState<Test>();

  const render = async () => {
    const { id } = router.query;
    const idNumber = Number.parseInt(id.toString());
    const testResult = await getTest(context.token, idNumber);
    setTest(testResult);
  };

  useEffect(() => {
    render();
  }, []);

  return test ? (
    <styles.Container>
      {errorEdit ? (
        <Snackbar
          message="Não foi possível editar o quiz"
          backgroundColor="#BD232F"
          timer={5000}
        />
      ) : (
        <></>
      )}
      <form>
        <div>
          <Title>{test.name}</Title>
          <Button text="Editar quiz" />
        </div>
        <styles.ContentContainer>
          <Input label="Nome" type="text" name="testName" value={test.name} />
        </styles.ContentContainer>
        <styles.ContentContainer>
          <Input
            label="Descrição"
            type="text"
            name="desc"
            value={test.description}
          />
        </styles.ContentContainer>
      </form>
    </styles.Container>
  ) : (
    <></>
  );
};

export default MyTestsPage;
