import * as styles from "./styles";

interface Content {
  text: string;
}

const Button: React.FC<Content> = ({ text }) => {
  return <styles.Button type="submit">{text}</styles.Button>;
};

export default Button;
