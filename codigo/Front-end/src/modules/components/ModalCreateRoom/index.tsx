import React, { FunctionComponent } from "react";
import * as styles from "./styles";
import Input from "../index/Input"

interface ConfirmationModalProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = (
  props
) => {
  return (
    <React.Fragment>
      <styles.Container>
        <form onSubmit = {props.onSubmit}>
        <Input
          type="text"
          icon="/user.svg"
          placeHolder="Digite o nome da sala"
          alt="Nome"
          name="roomname"
        />
        <label>Visiblidade da sala:</label>
        
        <styles.Select name="isPublic">
          <option value="public">publica</option>
          <option value="private">privada</option>
        </styles.Select>
        <styles.ConfirmationButtons>
          <styles.SubmitButton>Criar</styles.SubmitButton>
      </styles.ConfirmationButtons>
        </form>
      </styles.Container>
     
    </React.Fragment>
  );
};
export default ConfirmationModal;
