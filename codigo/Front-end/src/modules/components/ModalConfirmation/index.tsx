import React, { FunctionComponent } from "react";
import * as styles from "./styles";

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = (
  props
) => {
  return (
    <React.Fragment>
      <styles.Message>{props.message}</styles.Message>
      <styles.ConfirmationButtons>
        <styles.YesButton onClick={props.onConfirm}>Sim</styles.YesButton>
        <styles.NoButton onClick={props.onCancel}>Não</styles.NoButton>
      </styles.ConfirmationButtons>
    </React.Fragment>
  );
};
export default ConfirmationModal;
