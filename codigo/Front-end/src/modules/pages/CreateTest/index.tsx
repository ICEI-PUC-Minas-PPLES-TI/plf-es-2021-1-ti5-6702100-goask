import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "../../components/ContextWrapper";
import { useEffect, useState } from "react";

//From models
import { PostTest } from "@models/Test";

//Components
import Button from "../../components/Button";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Snackbar from "../../components/SnackBar";

//API
import { createTest } from "../../../share/api/api";

const MyTestsPage: React.FC = () => {
  const router = useRouter();
  const context = useAppContext();
  const [error, setError] = useState(false);

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    setError(false);
    e.preventDefault();
    const idCategory = 1;
    const name = e.currentTarget.testName.value;
    const description = e.currentTarget.desc.value;
    const test: PostTest = {
      name,
      description,
      idUser: context.user.idUser,
      idCategory,
    };
    const testCreated = await createTest(context.token, test);
    if (testCreated) {
      router.push(`/test/${testCreated.idTest}`);
    } else {
      setError(true);
    }
  };

  return (
    <styles.Container>
      {error ? (
        <Snackbar
          message="Não foi possível criar o quiz"
          backgroundColor="#BD232F"
          timer={5000}
        />
      ) : (
        <></>
      )}
      <form onSubmit={create}>
        <div>
          <Title>Criar quiz</Title>
          <Button text="Criar quiz" />
        </div>
        <styles.ContentContainer>
          <Input label="Nome" type="text" name="testName" />
        </styles.ContentContainer>
        <styles.ContentContainer>
          <Input label="Descrição" type="text" name="desc" />
        </styles.ContentContainer>
      </form>
    </styles.Container>
  );
};

export default MyTestsPage;
