from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.auth import check_token_access
from app.crud import crud_question
from app.db.database import SessionLocal
from app.schemas.questions import QuestionAnswerCreate, Question, QuestionUpdate

router = APIRouter()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=Question)
def create_question(question: QuestionAnswerCreate, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    return crud_question.create_question(db, question)


@router.get("/{question_id}", response_model=Question)
def read_question(question_id: int, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_question = crud_question.get_question_by_id(db, question_id)
    if db_question is None:
        raise HTTPException(status_code=404, detail="Question not found")
    return db_question


@router.put("/", response_model=Question)
def update_question(question: QuestionUpdate, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_question: Question = crud_question.get_question_by_id(db, question.idQuestion)
    if db_question is None:
        raise HTTPException(status_code=404, detail="Question not found")
    return crud_question.update_test(db=db, question=question, db_question=db_question)


@router.delete("/{question_id}", response_model=Question)
def delete_question(question_id: int, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_question: Question = crud_question.get_question_by_id(db, question_id=question_id)
    if db_question is None:
        raise HTTPException(status_code=404, detail="Test not found")
    return crud_question.delele_test(db=db, db_question=db_question)
