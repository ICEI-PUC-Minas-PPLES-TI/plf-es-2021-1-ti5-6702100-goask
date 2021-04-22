import * as styles from "./styles";

interface Content {
  text: string;
  submit?: boolean;
}

const Button: React.FC<Content> = ({ text, submit = true }) => {
  return (
    <styles.Button type={submit ? "submit" : "button"}>{text}</styles.Button>
  );
};

export default Button;
