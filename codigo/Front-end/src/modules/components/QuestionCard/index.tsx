import * as styles from "./styles";

//Hooks
import { useState } from "react";
import { PostQuestion, Question } from "@models/Test";
import Button from "../Button";
import Input from "../Input";

//Global
import themes from "src/share/styles/themes";
import theme from "src/share/styles/themes";

interface Content {
  question: Question;
  submit: (PostQuestion, number?) => void;
  deleteSubmit?: (id) => void;
  testId: number;
  questionId?: number;
}

const QuestionCard: React.FC<Content> = ({
  question,
  submit,
  deleteSubmit,
  testId,
  questionId,
}) => {
  const visible = "visible";
  const hidden = "hidden";
  const [open, setOpen] = useState(hidden);
  const correctAnswer =
    question && question.answers.filter((a) => a.isCorrect)[0];
  const incorrectsAnswers =
    question && question.answers.filter((a) => !a.isCorrect);

  const [correct, setCorrect] = useState(correctAnswer?.answerText || "");
  const [title, setTitle] = useState(question?.questionText || "");
  const [r1, setR1] = useState(
    incorrectsAnswers ? incorrectsAnswers[0].answerText : ""
  );
  const [r2, setR2] = useState(
    incorrectsAnswers ? incorrectsAnswers[1].answerText : ""
  );
  const [r3, setR3] = useState(
    incorrectsAnswers ? incorrectsAnswers[2].answerText : ""
  );

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

    // const correct = e.currentTarget.correct.value;
    // const title = e.currentTarget.titleQuestion.value;
    // const r1 = e.currentTarget.r1.value;
    // const r2 = e.currentTarget.r2.value;
    // const r3 = e.currentTarget.r3.value;

    let newQuestion: PostQuestion = {
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
    if (questionId) {
      submit(newQuestion, questionId);
    } else {
      setCorrect("");
      setR1("");
      setR2("");
      setR3("");
      setTitle("");
      submit(newQuestion);
    }
  };

  return (
    <styles.MainContainer>
      <styles.Container>
        <styles.Header onClick={changeVisibility}>
          <p>{question ? question.questionText : "Nova questão"}</p>
          <img src="/collapse.svg" alt="" />
        </styles.Header>
      </styles.Container>
      <styles.Container>
        <styles.Body visibility={open} open={open === visible}>
          <form onSubmit={send}>
            <Input
              label="Título"
              name="titleQuestion"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>Respostas</p>
            <Input
              label="Verdadeira"
              name="correct"
              type="text"
              color={theme.colors.borders.lightGreen}
              value={correct}
              onChange={(e) => setCorrect(e.target.value)}
            />
            <Input
              label="Falsa"
              name="r1"
              type="text"
              color={theme.colors.borders.lightRed}
              value={r1}
              onChange={(e) => setR1(e.target.value)}
            />
            <Input
              label="Falsa"
              name="r2"
              type="text"
              color={theme.colors.borders.lightRed}
              value={r2}
              onChange={(e) => setR2(e.target.value)}
            />
            <Input
              label="Falsa"
              name="r3"
              type="text"
              color={theme.colors.borders.lightRed}
              value={r3}
              onChange={(e) => setR3(e.target.value)}
            />
            <styles.ButtonContainer>
              <div>
                <Button text="Salvar" />
              </div>
              {deleteSubmit && (
                <div onClick={() => deleteSubmit(questionId)}>
                  <Button text="Deletar" submit={false} />
                </div>
              )}
            </styles.ButtonContainer>
          </form>
        </styles.Body>
      </styles.Container>
    </styles.MainContainer>
  );
};

export default QuestionCard;
