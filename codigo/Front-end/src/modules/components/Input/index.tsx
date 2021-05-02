import * as styles from "./styles";
interface InputConfig {
  type: string;
  label: string;
  name: string;
  value?: string;
  color?: string;
}

const Input: React.FC<InputConfig> = ({ type, label, name, value, color }) => {
  return (
    <styles.Container>
      <styles.InputDiv color={color}>
        <label htmlFor={name}>{label}:</label>
        <input
          required
          name={name}
          type={type}
          defaultValue={value ? value : ""}
        />
      </styles.InputDiv>
    </styles.Container>
  );
};

export default Input;
