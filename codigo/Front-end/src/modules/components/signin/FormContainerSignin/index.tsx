import * as styles from "./styles";

//From components
import IndexHeader from "../../index/IndexHeader";
import SigninForm from "../SigninForm";

const IndexFormContainer: React.FC = () => {
  return (
    <styles.FormContainer className="border">
      <IndexHeader title="Cadastrar" />
      <SigninForm />
    </styles.FormContainer>
  );
};

export default IndexFormContainer;
