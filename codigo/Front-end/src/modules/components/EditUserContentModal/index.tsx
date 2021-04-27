import * as styles from "./styles";
import React, { FunctionComponent } from "react";
import EditUserInput from "../EditUser/EditUserInput";
import ButtonForm from "../../components/ButtonForm";


interface EditModalProps {
  onConfirm: (e:React.FormEvent<HTMLFormElement>) => void;
  name: string;
  email: string;
}

const EditContentModal: FunctionComponent<EditModalProps> = (
  props
) => {
  return (
    <React.Fragment>
        <form onSubmit = {props.onConfirm}>
        <styles.Container>
                  <EditUserInput
                    type="text"
                    icon="/user.svg"
                    placeHolder="novo nome"
                    alt="Nome"
                    name="username"
                    value={props.name}
                  />
                  <EditUserInput
                    type="text"
                    icon="/mail-icon.svg"
                    placeHolder="novo e-mail"
                    alt="E-mail"
                    name="email"
                    value={props.email}
                  />{" "}
                  <styles.ButtonDiv>
                    <ButtonForm icon="/arrow-right.svg" alt="Enviar" />
                  </styles.ButtonDiv>
                </styles.Container>
        </form>
    </React.Fragment>
  );
};
export default EditContentModal;