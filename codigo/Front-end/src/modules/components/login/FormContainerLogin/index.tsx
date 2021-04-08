import * as styles from "./styles";

//From components
import IndexHeader from "../../index/IndexHeader";
import LoginForm from "../LoginForm";

const IndexFormContainer: React.FC = () => {
  return (
    <styles.FormContainer className="border">
      <IndexHeader title="Login" />
      <LoginForm />
    </styles.FormContainer>
  );
};

export default IndexFormContainer;
