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
    const token: Token = await loginUser(user);
    if (token) {
      sessionStorage.setItem("$$access_token", token.access_token);
      sessionStorage.setItem("$$token_type", token.token_type);
      router.push("/");
    } else {
      setLoginError(true);
    }
  };

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
