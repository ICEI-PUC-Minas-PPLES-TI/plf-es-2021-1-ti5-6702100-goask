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
// import { check } from "../../../share/utils/loginChecker";

//From models
import { RegisterUser, User } from "../../../../models/User";

import IndexHeader from "../../index/IndexHeader";
import SigninForm from "../SigninForm";

const SigninLabelsForm: React.FC = () => {
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
    <styles.Container>
      <div>
        <IndexHeader title="Cadastrar" />
        <SigninForm />
      </div>
    </styles.Container>
  );
};

export default SigninLabelsForm;
