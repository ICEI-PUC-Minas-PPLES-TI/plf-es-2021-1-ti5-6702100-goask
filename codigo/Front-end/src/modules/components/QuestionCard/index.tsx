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
      submit(newQuestion);
    }
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
              color={theme.colors.borders.lightGreen}
              value={question ? correctAnswer.answerText : ""}
            />
            <Input
              label="Falsa"
              name="r1"
              type="text"
              color={theme.colors.borders.lightRed}
              value={question ? incorrectsAnswers[0].answerText : ""}
            />
            <Input
              label="Falsa"
              name="r2"
              type="text"
              color={theme.colors.borders.lightRed}
              value={question ? incorrectsAnswers[1].answerText : ""}
            />
            <Input
              label="Falsa"
              name="r3"
              type="text"
              color={theme.colors.borders.lightRed}
              value={question ? incorrectsAnswers[2].answerText : ""}
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
