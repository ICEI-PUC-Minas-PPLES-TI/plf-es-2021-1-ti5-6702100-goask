import * as styles from "./styles";

import { useState } from "react";

interface InputConfig {
  icon: string;
  type: string;
  placeHolder: string;
  alt: string;
  name: string;
  value: string;
}

const EditUserInput: React.FC<InputConfig> = ({
  icon,
  type,
  placeHolder,
  alt,
  name,
  value
}) => {
    const [inputState, setInputState] = useState(value);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputState(e.target.value);
    }
  return (
    <styles.InputContainer>
      <styles.IconDiv>
        <img src={icon} alt={alt} />
      </styles.IconDiv>
      <styles.InputDiv>
        <input required name={name} type={type} placeholder={placeHolder} value={inputState} onChange={onChange} />
      </styles.InputDiv>
    </styles.InputContainer>
  );
};

export default EditUserInput;