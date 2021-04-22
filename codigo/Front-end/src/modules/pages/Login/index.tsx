import * as styles from "./styles";

//From components
import IndexImage from "../../components/index/IndexImage";
import LoginForm from "../../components/login/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <styles.Container>
      <LoginForm/>
      <IndexImage/>
    </styles.Container>
  );
};

export default LoginPage;
