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
import { registerUser } from "../../../../share/api/api";

//From utils
import { check } from "../../../../share/utils/loginChecker";

//From models
import { RegisterUser, User } from "../../../../models/User";

const SigninForm: React.FC = () => {
  const router = useRouter();
  const [signinError, setSigninError] = useState(false);

  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    setSigninError(false);
    e.preventDefault();
    const target = e.currentTarget;
    const username: string = target.username.value;
    const email: string = target.email.value;
    const pass: string = target.pass.value;
    if (email && pass && username) {
      const user: RegisterUser = {
        email,
        password: pass,
        name: username,
      };
      const response: User = await registerUser(user);
      if (response) {
        router.push("/login");
      } else {
        setSigninError(true);
      }
    }
  };

  return (
    <div>
      {signinError ? (
        <SnackBar
          message="Já existe uma conta com esse email"
          backgroundColor="#BD232F"
          timer={5000}
        />
      ) : (
        <></>
      )}
      <form onSubmit={signin}>
        <styles.Container>
          <Input
            type="text"
            icon="/user.svg"
            placeHolder="Digite seu nome"
            alt="Nome"
            name="username"
          />
          <Input
            type="text"
            icon="/mail-icon.svg"
            placeHolder="Digite seu e-mail"
            alt="E-mail"
            name="email"
          />{" "}
          <Input
            type="password"
            icon="/password-icon.svg"
            placeHolder="Digite sua senha"
            alt="Senha"
            name="pass"
          />
          <Link href="/login">
            <a>Já possuo uma conta</a>
          </Link>
          <styles.ButtonDiv>
            <ButtonForm icon="/arrow-right.svg" alt="Enviar" />
          </styles.ButtonDiv>
        </styles.Container>
      </form>
    </div>
  );
};

export default SigninForm;
