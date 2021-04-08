from sqlalchemy.orm import Session

from app.schemas.categories import CategoryCreate
from app.models.categories import Category


def create_category(db: Session, category: CategoryCreate):
    db_category = Category(name=category.name.upper())
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category


def get_category_by_name(db: Session, category: str):
    return db.query(Category).filter(Category.name == category.upper()).first()


def get_category_by_id(db: Session, category_id: int):
    return db.query(Category).filter(Category.idCategory == category_id).first()


def get_all_categories(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Category).offset(skip).limit(limit).all()


def update_category(db: Session, category: Category, db_category: Category):
    if category.name.strip():
        db_category.name = category.name.upper()
        db.flush()
        db.commit()
    return db_category
