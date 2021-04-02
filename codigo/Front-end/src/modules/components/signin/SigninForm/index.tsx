import * as styles from "./styles";
import Input from "../../index/Input";
import ButtonForm from "../../ButtonForm";
import Link from "next/link";

const SigninForm: React.FC = () => {
  const signin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const username: string = target.username.value;
    const email: string = target.email.value;
    const pass: string = target.pass.value;
    if (email && pass && username) {
    }
  };

  return (
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
        />
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
  );
};

export default SigninForm;
