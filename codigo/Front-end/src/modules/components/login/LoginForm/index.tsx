import * as styles from "./styles";
import Input from "../../index/Input";
import Link from "next/link";
import ButtonForm from "../../ButtonForm";

const LoginForm: React.FC = () => {
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const pass = e.currentTarget.pass.value;
    const access_token = "";
    const token_type = "";
    localStorage.setItem("$$access_token", access_token);
    localStorage.setItem("$$token_type", token_type);
  };

  return (
    <form onSubmit={login}>
      <styles.Container>
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
