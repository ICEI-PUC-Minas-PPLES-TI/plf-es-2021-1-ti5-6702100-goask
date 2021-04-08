from sqlalchemy.orm import Session

from app.core.auth import get_password_hash
from app.schemas.users import UserCreate, UserBase
from app.models.users import User


def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.idUser == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


def get_user_by_uuid(db: Session, uuid: str):
    return db.query(User).filter(User.uuid == uuid).first()


def create_user(db: Session, user: UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = User(email=user.email, password=hashed_password, name=user.name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def update_user(db: Session, user: UserBase, db_user: User):
    if user.name.strip():
        db_user.name = user.name
    if user.email.strip():
        db_user.email = user.email
    db.flush()
    db.commit()
    return db_user


def delele_user(db: Session, db_user: User):
    db.delete(db_user)
    db.flush()
    db.commit()
    return db_user
