import * as styles from "./styles";
interface Content {
  icon: string;
  alt: string;
}

const ButtonForm: React.FC<Content> = ({ icon, alt }) => {
  return (
    <styles.Button type="submit">
      <img src={icon} alt={alt} />
    </styles.Button>
  );
};

export default ButtonForm;
