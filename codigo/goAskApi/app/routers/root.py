from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.core.o_auth2_request_form import OAuth2RequestForm
from app.core.auth import verify_password, create_access_token, check_token_access
from app.crud import crud_user
from app.db.database import SessionLocal
from app.schemas.tokens import Token
from app.models.users import User

router = APIRouter()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/token", response_model=Token)
def login_user_fast_api(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    db_user: User = crud_user.get_user_by_email(db, email=form_data.username)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    if not verify_password(form_data.password, db_user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    else:
        access_token_expires = timedelta(minutes=1440)
        jwt = create_access_token(
            data={"uuid": db_user.uuid}, expires_delta=access_token_expires
        )
        return {"access_token": jwt, "token_type": "bearer"}


@router.post("/login", response_model=Token)
def login_user(form_data: OAuth2RequestForm = Depends(), db: Session = Depends(get_db)):
    db_user: User = crud_user.get_user_by_email(db, email=form_data.useremail)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    if not verify_password(form_data.password, db_user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    else:
        access_token_expires = timedelta(minutes=120)
        jwt = create_access_token(
            data={"uuid": db_user.uuid}, expires_delta=access_token_expires
        )
        return {"access_token": jwt, "token_type": "bearer"}


@router.get("/check", response_model=bool)
def check_token(uuid: str = Depends(check_token_access), db: Session = Depends(get_db)):
    db_user: User = crud_user.get_user_by_uuid(db, uuid)
    if db_user:
        return True
    return False
