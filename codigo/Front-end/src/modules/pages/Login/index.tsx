import * as styles from "./styles";

//From components
import IndexImage from "../../components/index/IndexImage";
import IndexFormContainer from "../../components/index/IndexFormContainer";
import FormContainerLogin from "../../components/login/FormContainerLogin";

const LoginPage: React.FC = () => {
  return (
    <styles.Container>
      <IndexFormContainer>
        <FormContainerLogin></FormContainerLogin>
      </IndexFormContainer>
      <IndexImage></IndexImage>
    </styles.Container>
  );
};

export default LoginPage;
