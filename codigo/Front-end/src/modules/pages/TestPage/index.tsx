import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "../../components/ContextWrapper";
import { useEffect, useState } from "react";

//From models
import { PostTest, Test } from "@models/Test";

//Components
import Button from "../../components/Button";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Snackbar from "../../components/SnackBar";

//API
import { getTest, updateTest } from "../../../share/api/api";

const MyTestsPage: React.FC = () => {
  const router = useRouter();
  const context = useAppContext();
  const timeSnackBar = 5000;
  const [errorEdit, setErrorEdit] = useState(false);
  const [edited, setEdited] = useState(false);
  const [test, setTest] = useState<Test>();

  const render = async () => {
    const { id } = router.query;
    const idNumber = Number.parseInt(id.toString());
    const testResult = await getTest(context.token, idNumber);
    setTest(testResult);
  };

  const edit = async (e: React.FormEvent<HTMLFormElement>) => {
    setErrorEdit(false);
    e.preventDefault();

    const name = e.currentTarget.testName.value;
    const description = e.currentTarget.desc.value;
    const idUser = test.idUser;
    const idCategory = test.idCategory;

    const testEdited: PostTest = {
      name,
      description,
      idUser,
      idCategory,
    };

    const newTest = await updateTest(context.token, testEdited, test.idTest);

    if (newTest) {
      setEdited(true);
      setTimeout(() => {
        setEdited(false);
      }, timeSnackBar);
    } else {
      setErrorEdit(true);
    }
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
          timer={timeSnackBar}
        />
      ) : (
        <></>
      )}
      {edited ? (
        <Snackbar
          message="Quiz editado com sucesso"
          backgroundColor="#34B04A"
          timer={5000}
        />
      ) : (
        <></>
      )}
      <form onSubmit={edit}>
        <div>
          <Title>{test.name.substring(0, 50)}</Title>
          <Button text="Editar quiz" />
          <Button text="Deletar quiz" submit={false} />
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
