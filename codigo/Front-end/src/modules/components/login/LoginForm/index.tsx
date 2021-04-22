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
import { loginUser, getUser } from "../../../../share/api/api";

//From models
import { LoginUser, User } from "../../../../models/User";
import { Token } from "../../../../models/Token";

//From Hooks
import { useAppContext } from "../../../../modules/components/ContextWrapper";

import IndexHeader from "../../index/IndexHeader";
import LoginLabelForm from "../LoginLabelsForm";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const context = useAppContext();
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
      //salva o sessionStorage
      sessionStorage.setItem("$$access_token", token.access_token);
      sessionStorage.setItem("$$token_type", token.token_type);
      //salva o contexto
      context.setToken(token);
      //caça o usuário
      const user: User = await getUser(token);
      //salva o usuário
      context.setUser(user);
      router.push("/");
    } else {
      setLoginError(true);
    }
  }
  return (
    <styles.Container>
      <div>
      <IndexHeader title="Login" />
      <LoginLabelForm />
    </div>
    </styles.Container>
  );
};

export default LoginForm;
