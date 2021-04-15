import * as styles from "./styles";

//From components
import IndexImage from "../../components/index/IndexImage";
import LoginForm from "../../components/login/loginForm";

const LoginPage: React.FC = () => {
  return (
    <styles.Container>
      <LoginForm/>
      <IndexImage></IndexImage>
    </styles.Container>
  );
};

export default LoginPage;
