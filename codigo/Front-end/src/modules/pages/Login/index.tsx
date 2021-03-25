import * as styles from "./styles";
import IndexImage from "../../components/IndexImage";
import IndexFormContainer from "../../components/IndexFormContainer";

const LoginPage: React.FC = () => {
  return (
    <styles.Container>
      <IndexFormContainer></IndexFormContainer>

      <IndexImage></IndexImage>
    </styles.Container>
  );
};

export default LoginPage;
