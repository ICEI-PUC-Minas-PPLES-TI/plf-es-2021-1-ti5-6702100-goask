import * as styles from "./styles";

//From components
import IndexHeader from "../../index/IndexHeader";
import EditUserForm from "../EditUserForm";

const FormContainerEditUser: React.FC = () => {
  return (
    <styles.FormContainer className="border">
      <IndexHeader title="Atualizar Cadastro" />
      <EditUserForm />
    </styles.FormContainer>
  );
};

export default FormContainerEditUser;