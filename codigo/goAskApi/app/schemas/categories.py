from pydantic import BaseModel


# Category

class CategoryCreate(BaseModel):
    """
    Quiz category to be created representation.
    """
    name: str


class Category(CategoryCreate):
    """
    Quiz category representation.
    """
    idCategory: int

    class Config:
        orm_mode = True
