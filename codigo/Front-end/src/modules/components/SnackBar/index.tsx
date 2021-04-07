import * as styles from "./styles";

//Hooks
import { useState } from "react";

interface Content {
  message: string;
  backgroundColor: string;
  timer: number;
}

const ButtonForm: React.FC<Content> = ({ message, backgroundColor, timer }) => {
  const [visibility, setVisibility] = useState("visible");

  setTimeout(() => close(), timer);

  const close = () => {
    setVisibility("hidden");
  };

  return (
    <styles.Container backgroundColor={backgroundColor} visibility={visibility}>
      <p>{message}</p>
      <button onClick={close}>X</button>
    </styles.Container>
  );
};

export default ButtonForm;
