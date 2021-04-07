import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import { useState } from "react";

//From components
import Input from "../../index/Input";
import ButtonForm from "../../ButtonForm";

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
    <form onSubmit={login}>
      <styles.Container>
        {loginError ? <p>Email ou senha inválidos</p> : <></>}
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
      </styles.Container>
    </form>
  );
};

export default LoginForm;
