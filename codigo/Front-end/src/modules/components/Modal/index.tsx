import React, { FunctionComponent, useEffect } from "react";
import FocusLock from "react-focus-lock";
import ReactDOM from "react-dom";

import * as styles from "./styles";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);

  const modal = (
    <React.Fragment>
      <styles.Backdrop onClick={hide} />
      <FocusLock>
        <styles.Wrapper
          aria-modal
          aria-labelledby={headerText}
          tabIndex={-1}
          role="dialog"
        >
          <styles.StyledModal>
            <styles.Header>
              <styles.CloseButton onClick={hide}>X</styles.CloseButton>
            </styles.Header>
            <styles.HeaderText>{headerText}</styles.HeaderText>
            <styles.Content>{modalContent}</styles.Content>
          </styles.StyledModal>
        </styles.Wrapper>
      </FocusLock>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
