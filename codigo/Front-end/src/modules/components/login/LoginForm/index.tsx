import * as styles from "./styles";

import IndexHeader from "../../index/IndexHeader";
import LoginLabelForm from "../LoginLabelsForm";

const LoginForm : React.FC = () => {
  return (
    <styles.Container>
      <div>
      <IndexHeader title="Login" />
      <LoginLabelForm />
    </div>
    </styles.Container>
  );
};

export default LoginForm;
