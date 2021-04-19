from sqlalchemy.orm import Session

from app.schemas.answers import AnswerUpdate, AnswerCreate
from app.models.answers import Answer


def create_answers(db: Session, answer: AnswerCreate, idQuestion: int):
    db_answer = Answer(answerText=answer.answerText, isCorrect=answer.isCorrect, idQuestion=idQuestion)
    db.add(db_answer)
    db.commit()
    db.refresh(db_answer)


def update_answer(db: Session, answer: AnswerUpdate):
    db_answer: Answer = db.query(Answer).filter(Answer.idAnswer == answer.idAnswer).first()
    db_answer.isCorrect = answer.isCorrect
    if answer.answerText.strip():
        db_answer.answerText = answer.answerText
    db.flush()
    db.commit()

