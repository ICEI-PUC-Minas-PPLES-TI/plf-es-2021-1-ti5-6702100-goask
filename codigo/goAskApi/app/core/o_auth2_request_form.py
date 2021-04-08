from fastapi.params import Form,Body


class OAuth2RequestForm:

    def __init__(
            self,
            useremail: str = Body(...),
            password: str = Body(...),
    ):
        self.useremail = useremail
        self.password = password
