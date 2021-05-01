import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "../../components/ContextWrapper";
import { useEffect, useState } from "react";

//From models
import {
  PostQuestion,
  PostTest,
  Question,
  Test,
  PutQuestion,
  PutAnswer,
} from "@models/Test";

//Components
import Button from "../../components/Button";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Snackbar from "../../components/SnackBar";
import Modal from "../../components/Modal";
import ConfirmationModal from "../../components/ModalConfirmation";
import QuestionCard from "../../components/QuestionCard";
import { useModal } from "../../utils/useModal";

//API
import {
  getTest,
  updateTest,
  deleteTest,
  createQuestion,
  updateQuestion,
  getQuestion,
  deleteQuestion,
} from "../../../share/api/api";

const TestPage: React.FC = () => {
  const router = useRouter();
  const context = useAppContext();
  const timeSnackBar = 5000;
  const [showBar, setShowBar] = useState(false);
  const [test, setTest] = useState<Test>();
  const [color, setColor] = useState("#34B04A");
  const [message, setMessage] = useState("");

  const { isShown, toggle } = useModal();

  const onConfirm = async () => {
    await deleteTest(context.token, test.idTest);
    router.push("/mytests/");
    toggle();
  };
  const onCancel = () => toggle();

  const render = async () => {
    const { id } = router.query;
    if (id) {
      const idNumber = Number.parseInt(id.toString());
      const testResult = await getTest(context.token, idNumber);
      setTest(testResult);
    }
  };

  const updateSnackBar = (res, msgSuccess: string, msgError: string) => {
    if (res) {
      setMessage(msgSuccess);
      setColor("#34B04A");
    } else {
      setMessage(msgError);
      setColor("#BD232F");
    }
    setShowBar(true);
    setTimeout(() => {
      setShowBar(false);
    }, timeSnackBar);
  };

  const addQuestion = async (question: PostQuestion) => {
    const res = await createQuestion(context.token, question);
    updateSnackBar(
      res,
      "Questão criada com sucesso!",
      "Não foi possível criar a questão."
    );
    console.log(res);
    // setTest({ ...test, questions: res.questions });
    // const newTest = await getTest(context.token, test.idTest);
    // setTest(newTest);
  };

  const updateQuestionSubmit = async (question: PostQuestion, id: number) => {
    const putAnswers: PutAnswer[] = [];

    const originalAnswer = await getQuestion(context.token, id);

    for (let q of originalAnswer.answers) {
      putAnswers.push({
        answerText: q.answerText,
        idAnswer: q.idAnswer,
        isCorrect: q.isCorrect,
      });
    }

    const putQuestion: PutQuestion = {
      questionText: question.questionText,
      idTest: question.idTest,
      answers: putAnswers,
    };

    const res = await updateQuestion(context.token, putQuestion, id);
    updateSnackBar(
      res,
      "Questão atualizada com sucesso!",
      "Não foi possível atualizar a questão."
    );
    const newTest = await getTest(context.token, test.idTest);
    setTest(newTest);
  };

  const deleteQuestionSubmit = async (id: number) => {
    const res = await deleteQuestion(context.token, id);
    updateSnackBar(
      res,
      "Questão deletada com sucesso!",
      "Não foi possível deletar a questão."
    );
    const newTest = await getTest(context.token, test.idTest);
    setTest(newTest);
  };

  const edit = async (e: React.FormEvent<HTMLFormElement>) => {
    setShowBar(false);
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
    updateSnackBar(
      newTest,
      "Quiz atualizado com sucesso!",
      "Não foi possível atualizar o quiz."
    );

    setTest(newTest);
  };

  useEffect(() => {
    render();
  }, []);

  return test ? (
    <styles.Container>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Aviso"
        modalContent={
          <ConfirmationModal
            onConfirm={onConfirm}
            onCancel={onCancel}
            message="Tem certeza que deseja deletar esse quiz?"
          />
        }
      />

      {showBar ? (
        <Snackbar message={message} backgroundColor={color} timer={5000} />
      ) : (
        <></>
      )}

      <form onSubmit={edit}>
        <styles.Header>
          <styles.TextContainer>
            <Title>{test.name.substring(0, 50)}</Title>
          </styles.TextContainer>
          <styles.ButtonsContainer>
            <Button text="Editar quiz" />
            <div onClick={toggle}>
              <Button text="Deletar quiz" submit={false} />
            </div>
          </styles.ButtonsContainer>
        </styles.Header>
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

      <styles.QuestionContainer>
        <Title>Questões</Title>
        {test.questions
          .sort((q) => q.idQuestion)
          .reverse()
          .map((q: Question, index) => {
            return (
              <styles.CardContainer key={index}>
                <QuestionCard
                  question={q}
                  submit={updateQuestionSubmit}
                  deleteSubmit={deleteQuestionSubmit}
                  questionId={q.idQuestion}
                  testId={test.idTest}
                />
              </styles.CardContainer>
            );
          })}
        <styles.CardContainer>
          <QuestionCard
            question={null}
            submit={addQuestion}
            testId={test.idTest}
          />
        </styles.CardContainer>
      </styles.QuestionContainer>
    </styles.Container>
  ) : (
    <></>
  );
};

export default TestPage;
