from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.auth import check_token_access
from app.crud import crud_category
from app.db.database import SessionLocal
from app.schemas.categories import Category, CategoryCreate

router = APIRouter()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=Category)
def create_category(category: CategoryCreate, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_category: Category = crud_category.get_category_by_name(db, category.name)
    if db_category:
        raise HTTPException(status_code=400, detail="Category already registered")
    return crud_category.create_category(db, category)


@router.get("/{category_id}", response_model=Category)
def read_category(category_id: int, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_category: Category = crud_category.get_category_by_id(db, category_id=category_id)
    if db_category is None:
        raise HTTPException(status_code=404, detail="Category not found")
    return db_category


@router.get("/", response_model=List[Category])
def read_categories(skip: int = 0, limit: int = 100, db: Session = Depends(get_db),
                    uuid: str = Depends(check_token_access)):
    db_categories = crud_category.get_all_categories(db, skip=skip, limit=limit)
    return db_categories


@router.put("/", response_model=Category)
def update_category(category: Category, db: Session = Depends(get_db), uuid: str = Depends(check_token_access)):
    db_category: Category = crud_category.get_category_by_id(db, category_id=category.idCategory)
    if db_category is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud_category.update_category(db=db, category=category, db_category=db_category)
