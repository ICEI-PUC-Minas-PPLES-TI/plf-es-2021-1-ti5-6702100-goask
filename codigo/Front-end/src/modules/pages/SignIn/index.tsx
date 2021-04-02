import * as styles from "./styles";
import IndexImage from "../../components/index/IndexImage";
import IndexFormContainer from "../../components/index/IndexFormContainer";
import FormContainerSignin from "../../components/signin/FormContainerSignin";

const SignInPage: React.FC = () => {
  return (
    <styles.Container>
      <IndexFormContainer>
        <FormContainerSignin />
      </IndexFormContainer>
      <IndexImage />
    </styles.Container>
  );
};

export default SignInPage;
