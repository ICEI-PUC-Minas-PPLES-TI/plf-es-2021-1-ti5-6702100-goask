import * as styles from "./styles";
interface InputConfig {
  icon: string;
  type: string;
  placeHolder: string;
  alt: string;
  name: string;
}

const Input: React.FC<InputConfig> = ({
  icon,
  type,
  placeHolder,
  alt,
  name,
}) => {
  return (
    <styles.InputContainer>
      <styles.IconDiv>
        <img src={icon} alt={alt} />
      </styles.IconDiv>
      <styles.InputDiv>
        <input required name={name} type={type} placeholder={placeHolder} />
      </styles.InputDiv>
    </styles.InputContainer>
  );
};

export default Input;
