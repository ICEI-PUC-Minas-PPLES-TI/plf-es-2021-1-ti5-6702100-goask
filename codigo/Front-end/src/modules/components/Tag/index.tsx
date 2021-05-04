import * as styles from "./styles";

interface Content {
  text: string;
  color?: string;
  textColor?: string;
}

const Tag: React.FC<Content> = ({ text, color, textColor }) => {
  return (
    <styles.Container color={color} fontColor={textColor}>
      <p>{text}</p>
    </styles.Container>
  );
};

export default Tag;
