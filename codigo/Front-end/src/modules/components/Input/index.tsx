import * as styles from "./styles";
interface InputConfig {
  type: string;
  label: string;
  name: string;
  value?: string;
}

const Input: React.FC<InputConfig> = ({ type, label, name, value }) => {
  return (
    <styles.Container>
      <styles.InputDiv>
        <label htmlFor={name}>{label}:</label>
        <input required name={name} type={type} />
      </styles.InputDiv>
    </styles.Container>
  );
};

export default Input;
