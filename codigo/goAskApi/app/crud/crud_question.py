from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.schemas.questions import QuestionAnswerCreate, QuestionUpdate
from app.models.questions import Question
from app.crud import crud_answer


def create_question(db: Session, question: QuestionAnswerCreate):
    db_question = Question(questionText=question.questionText, idTest=question.idTest)
    db.add(db_question)
    db.commit()
    db.refresh(db_question)
    for answer in question.answers:
        crud_answer.create_answers(db, answer, db_question.idQuestion)
    return db_question


def get_question_by_id(db: Session, question_id: int):
    return db.query(Question).filter(Question.idQuestion == question_id).first()


def update_test(db: Session, question: QuestionUpdate, db_question: Question):
    if question.questionText.strip():
        db_question.questionText = question.questionText
    db.flush()
    db.commit()
    if question.answers is not None:
        for answer in question.answers:
            crud_answer.update_answer(db, answer)
    return db_question


def delele_test(db: Session, db_question: Question):
    db.delete(db_question)
    db.flush()
    db.commit()
    return db_question
