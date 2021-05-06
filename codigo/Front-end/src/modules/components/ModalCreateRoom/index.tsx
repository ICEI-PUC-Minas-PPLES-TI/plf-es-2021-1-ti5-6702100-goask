import React, { FunctionComponent } from "react";
import * as styles from "./styles";
import Input from "../index/Input";

interface ConfirmationModalProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = (
  props
) => {
  return (
    <React.Fragment>
      <styles.Container>
        <form onSubmit={props.onSubmit}>
          <Input
            type="text"
            icon="/door.svg"
            placeHolder="Digite o nome da sala"
            alt="Nome"
            name="roomname"
          />
          <div>
            <label>Visiblidade da sala:</label>
            <styles.Select name="isPublic">
              <option value="public">Pública</option>
              <option value="private">Privada</option>
            </styles.Select>
          </div>
          <styles.ConfirmationButtons>
            <styles.SubmitButton>Criar</styles.SubmitButton>
          </styles.ConfirmationButtons>
        </form>
      </styles.Container>
    </React.Fragment>
  );
};
export default ConfirmationModal;
