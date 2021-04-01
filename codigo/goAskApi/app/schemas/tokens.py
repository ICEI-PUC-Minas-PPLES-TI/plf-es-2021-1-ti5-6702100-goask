from pydantic import BaseModel
from typing import Optional


# Token
class Token(BaseModel):
    """
    App's Token basic representation.
    """
    access_token: str
    token_type: str


class TokenData(BaseModel):
    """
    App's Token basic representation.
    """
    user_email: Optional[str] = None
