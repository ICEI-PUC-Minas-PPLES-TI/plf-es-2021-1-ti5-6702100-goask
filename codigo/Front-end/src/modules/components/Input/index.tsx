import * as styles from "./styles";
interface InputConfig {
  type: string;
  label: string;
  name: string;
  defaultValue?: string;
  value?: string;
  color?: string;
  onChange?: (e: any) => void;
}

const Input: React.FC<InputConfig> = ({
  type,
  label,
  name,
  defaultValue,
  value,
  color,
  onChange,
}) => {
  return (
    <styles.Container>
      <styles.InputDiv color={color}>
        <label htmlFor={name}>{label}:</label>
        <input
          required
          name={name}
          type={type}
          defaultValue={defaultValue ? defaultValue : ""}
          value={value}
          onChange={onChange}
        />
      </styles.InputDiv>
    </styles.Container>
  );
};

export default Input;
