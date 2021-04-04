from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.o_auth2_request_form import OAuth2RequestForm
from app.core.auth import verify_password, create_access_token
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
            data={"email": db_user.email}, expires_delta=access_token_expires
        )
        return {"access_token": jwt, "token_type": "bearer"}
