from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.auth import check_token_access
from app.crud import crud_test, crud_user
from app.db.database import SessionLocal
from app.models.users import User
from app.schemas.tests import Test, TestCreate, TestUpdate

router = APIRouter()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=Test)
def create_test(category: TestCreate, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    return crud_test.create_test(db, category)


@router.get("/{test_id}", response_model=Test)
def read_test(test_id: int, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_test: Test = crud_test.get_test_by_id(db, test_id)
    if db_test is None:
        raise HTTPException(status_code=404, detail="Test not found")
    return db_test


@router.get("/", response_model=List[Test])
def read_tests(skip: int = 0, limit: int = 100, db: Session = Depends(get_db),
               uuid: str = Depends(check_token_access)):
    db_user: User = crud_user.get_user_by_uuid(db, uuid=uuid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud_test.get_all_test_of_user(db, db_user=db_user, skip=skip, limit=limit)


@router.put("/", response_model=Test)
def update_test(test: TestUpdate, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_user: User = crud_user.get_user_by_uuid(db, uuid=uuid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    db_test: Test = crud_test.get_test_by_id(db, test_id=test.idTest)
    if db_test is None:
        raise HTTPException(status_code=404, detail="Test not found")
    return crud_test.update_test(db=db, test=test, db_test=db_test, db_user=db_user)


@router.delete("/{test_id}", response_model=Test)
def delete_user(test_id: int, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_user: User = crud_user.get_user_by_uuid(db, uuid=uuid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    db_test: Test = crud_test.get_test_by_id(db, test_id=test_id)
    if db_test is None:
        raise HTTPException(status_code=404, detail="Test not found")
    return crud_test.delele_test(db=db, db_test=db_test, db_user=db_user)
