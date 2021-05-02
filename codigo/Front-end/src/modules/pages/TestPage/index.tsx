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
import ModalCreateRoom from "../../components/ModalCreateRoom";
import QuestionCard from "../../components/QuestionCard";
import { useModal } from "../../utils/useModal";
import { useModalRoom } from "../../utils/useModalRoom";
import Select from "../../components/SelectCategories";
import RoomButton from "../../components/ButtonForm"

//API
import {
  getTest,
  updateTest,
  deleteTest,
  createQuestion,
  updateQuestion,
  getQuestion,
  deleteQuestion,
  createRoom,
} from "../../../share/api/api";
import { PostRoom } from "@models/Room";

const TestPage: React.FC = () => {
  const router = useRouter();
  const context = useAppContext();
  const timeSnackBar = 5000;
  const [showBar, setShowBar] = useState(false);
  const [test, setTest] = useState<Test>();
  const [color, setColor] = useState("#34B04A");
  const [message, setMessage] = useState("");

  const { isShown, toggle } = useModal();
  const { isShownRoom, toggleRoom} = useModalRoom();

  const onConfirm = async () => {
    await deleteTest(context.token, test.idTest);
    router.push("/mytests/");
    toggle();
  };
  const onCancel = () => toggle();


  const roomCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.currentTarget.roomname.value;
    console.log(name)
    const idTest = test.idTest;
    const idUser = test.idUser;
    const isPublic = e.currentTarget.isPublic.value === "public" ? true : false ;
    console.log(isPublic);
    const room: PostRoom = {
      name,
      idTest,
      idUser,
      isPublic
    }
    const response = await createRoom(context.token,room);
    if(response) {
      console.log("deu certo")
      console.log(response)
      toggleRoom();
    } else {
      console.log("deu ruim")
      toggleRoom();
    }
  }

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
    test.questions.push(res);
    updateSnackBar(
      res,
      "Questão criada com sucesso!",
      "Não foi possível criar a questão."
    );
  };

  const updateQuestionSubmit = async (question: PostQuestion, id: number) => {
    const putAnswers: PutAnswer[] = [];
    console.log("QUESTÃO RECEBIDA DO CARD", question);

    const originalAnswer = await getQuestion(context.token, id);

    for (let i = 0; i < question.answers.length; i++) {
      putAnswers.push({
        answerText: question.answers[i].answerText,
        idAnswer: originalAnswer.answers[i].idAnswer,
        isCorrect: question.answers[i].isCorrect,
      });
    }

    const putQuestion: PutQuestion = {
      questionText: question.questionText,
      idTest: question.idTest,
      answers: putAnswers,
    };

    const res = await updateQuestion(context.token, putQuestion, id);
    const index = test.questions.findIndex((q) => (q.idTest = res.idTest));
    test.questions[index] = res;
    updateSnackBar(
      res,
      "Questão atualizada com sucesso!",
      "Não foi possível atualizar a questão."
    );
  };

  const deleteQuestionSubmit = async (id: number) => {
    const res = await deleteQuestion(context.token, id);
    const newTest = await getTest(context.token, test.idTest);
    setTest(newTest);
    updateSnackBar(
      res,
      "Questão deletada com sucesso!",
      "Não foi possível deletar a questão."
    );
  };

  const edit = async (e: React.FormEvent<HTMLFormElement>) => {
    setShowBar(false);
    e.preventDefault();

    const name = e.currentTarget.testName.value;
    const description = e.currentTarget.desc.value;
    const idUser = test.idUser;
    const idCategory = e.currentTarget.category.value;

    const testEdited: PostTest = {
      name,
      description,
      idUser,
      idCategory: 1,
    };

    const newTest = await updateTest(context.token, testEdited, test.idTest);
    console.log(newTest);
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

      <Modal
        isShown={isShownRoom}
        hide={toggleRoom}
        headerText="Crie sua sala"
        modalContent={
          <ModalCreateRoom
            onSubmit={roomCreate}
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
          <Select
            label="Categoria"
            name="category"
            idSelected={test.category.idCategory}
          />
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
        {test.questions.map((q: Question, index) => {
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
      <styles.createRoomButtonContainer>
      <div onClick={toggleRoom}>
              <RoomButton icon="/clipboard-add.svg" alt="Enviar" />
      </div>
      </styles.createRoomButtonContainer>
    </styles.Container>
  ) : (
    <></>
  );
};

export default TestPage;
