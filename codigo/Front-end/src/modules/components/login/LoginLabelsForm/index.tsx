import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import { useState } from "react";

//From components
import Input from "../../index/Input";
import ButtonForm from "../../ButtonForm";
import SnackBar from "../../SnackBar";

//From next
import Link from "next/link";

//From api
import { loginUser } from "../../../../share/api/api";

//From utils
import { check } from "../../../../share/utils/loginChecker";

//From models
import { LoginUser } from "../../../../models/User";
import { Token } from "../../../../models/Token";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoginError(false);
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const pass = e.currentTarget.pass.value;
    const user: LoginUser = {
      useremail: email,
      password: pass,
    };
    const response: Token = await loginUser(user);
    if (response) {
      localStorage.setItem("$$access_token", response.data.access_token);
      localStorage.setItem("$$token_type", response.data.token_type);
      router.push("/");
    } else {
      setLoginError(true);
    }
  };

  const verify = async () => {
    if (await check(localStorage.getItem("$$access_token"))) {
      router.push("/");
    }
  };

  verify();

  return (
    <div>
      {loginError ? (
        <SnackBar
          message="Email ou senha inválidos"
          backgroundColor="#BD232F"
          timer={5000}
        />
      ) : (
        <></>
      )}
      <styles.Container>
        <form  onSubmit={login}>
        <styles.FormContainer>
          <Input
            type="text"
            icon="/mail-icon.svg"
            placeHolder="Digite seu e-mail"
            alt="E-mail"
            name="email"
          />
          <Input
            type="password"
            icon="/password-icon.svg"
            placeHolder="Digite sua senha"
            alt="Senha"
            name="pass"
          />
          <Link href="/signin">
            <a>Não tenho cadastro</a>
          </Link>
          <styles.ButtonDiv>
            <ButtonForm icon="/arrow-right.svg" alt="Enviar" />
          </styles.ButtonDiv>
          </styles.FormContainer>
        </form>
    </styles.Container>
    </div>
  );
};

export default LoginForm;
