import * as styles from "./styles";

interface Content {
  value: number;
  text: string;
  icon: string;
  alt: string;
}

const IconData: React.FC<Content> = ({ value, text, icon, alt }) => {
  return (
    <styles.Container>
      <img src={icon} alt={alt} />
      <div>
        <span>{value}</span>
        <p>{text}</p>
      </div>
    </styles.Container>
  );
};

export default IconData;
