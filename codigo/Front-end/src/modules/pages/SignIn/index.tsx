import * as styles from "./styles";

//From components
import IndexImage from "../../components/index/IndexImage";
import IndexFormContainer from "../../components/index/IndexFormContainer";
import FormContainerSignin from "../../components/signin/SigninLabelsForm";

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
