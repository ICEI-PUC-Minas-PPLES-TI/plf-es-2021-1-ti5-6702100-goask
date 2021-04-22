import * as styles from "./styles";

//Hooks
import { useState } from "react";
import { PostQuestion, Question } from "@models/Test";
import Button from "../Button";
import Input from "../Input";

interface Content {
  question: Question;
  submit: (PostQuestion) => void;
  testId: number;
}

const QuestionCard: React.FC<Content> = ({ question, submit, testId }) => {
  const visible = "visible";
  const hidden = "hidden";
  const [open, setOpen] = useState(hidden);

  const changeVisibility = () => {
    if (open === hidden) {
      openDetails();
    } else {
      close();
    }
  };

  const close = () => {
    setOpen(hidden);
  };

  const openDetails = () => {
    setOpen(visible);
  };

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const correct = e.currentTarget.correct.value;
    const title = e.currentTarget.titleQuestion.value;
    const r1 = e.currentTarget.r1.value;
    const r2 = e.currentTarget.r2.value;
    const r3 = e.currentTarget.r3.value;

    const question: PostQuestion = {
      answers: [
        {
          answerText: correct,
          isCorrect: true,
        },
        {
          answerText: r1,
          isCorrect: false,
        },
        {
          answerText: r2,
          isCorrect: false,
        },
        {
          answerText: r3,
          isCorrect: false,
        },
      ],
      idTest: testId,
      questionText: title,
    };
    submit(question);
  };

  return (
    <styles.MainContainer>
      <styles.Container>
        <styles.Header onClick={changeVisibility}>
          <p>{question ? question.questionText : "Nova questão"}</p>
        </styles.Header>
      </styles.Container>
      <styles.Container>
        <styles.Body visibility={open} open={open === visible}>
          <form onSubmit={send}>
            <Input
              label="Título"
              name="titleQuestion"
              type="text"
              value={question ? question.questionText : ""}
            />
            <p>Respostas</p>
            <Input
              label="Verdadeira"
              name="correct"
              type="text"
              value={question ? question.answers[0].answerText : ""}
            />
            <Input
              label="Falsa"
              name="r1"
              type="text"
              value={question ? question.answers[1].answerText : ""}
            />
            <Input
              label="Falsa"
              name="r2"
              type="text"
              value={question ? question.answers[2].answerText : ""}
            />
            <Input
              label="Falsa"
              name="r3"
              type="text"
              value={question ? question.answers[3].answerText : ""}
            />
            <Button text="Salvar" />
          </form>
        </styles.Body>
      </styles.Container>
    </styles.MainContainer>
  );
};

export default QuestionCard;
