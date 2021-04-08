from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.users import User
from app.schemas.tests import TestCreate, TestUpdate
from app.models.tests import Test


def create_test(db: Session, test: TestCreate):
    db_test = Test(name=test.name, description=test.description, idUser=test.idUser, idCategory=test.idCategory)
    db.add(db_test)
    db.commit()
    db.refresh(db_test)
    return db_test


def get_test_by_id(db: Session, test_id: int):
    return db.query(Test).filter(Test.idTest == test_id).first()


def get_all_test_of_user(db: Session, db_user: User, skip: int = 0, limit: int = 100):
    return db.query(Test).filter(Test.idUser == db_user.idUser).offset(skip).limit(limit).all()


def update_test(db: Session, test: TestUpdate, db_test: Test, db_user: User):
    if db_test.idUser == db_user.idUser:
        if test.name.strip():
            db_test.name = test.name
        if test.description.strip():
            db_test.description = test.description
        db.flush()
        db.commit()
        return db_test
    else:
        raise HTTPException(status_code=404, detail="User not authorized to delete")


def delele_test(db: Session, db_test: Test, db_user: User):
    if db_test.idUser == db_user.idUser:
        db.delete(db_test)
        db.flush()
        db.commit()
        return db_test
    else:
        raise HTTPException(status_code=404, detail="User not authorized to delete")
