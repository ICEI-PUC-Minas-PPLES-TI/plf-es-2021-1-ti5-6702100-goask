import * as styles from "./styles";
interface Content {
  icon: string;
  alt: string;
  tooltip?: string;
  submit?: boolean;
  color?: string;
  hoverColor?: string;
  brightness?: boolean;
}

const ButtonForm: React.FC<Content> = ({
  icon,
  alt,
  tooltip,
  submit = true,
  color,
  hoverColor,
  brightness,
}) => {
  return (
    <styles.Button
      type={submit ? "submit" : "button"}
      color={color}
      tooltip={tooltip}
      hoverColor={hoverColor}
      brightness={brightness}
    >
      <img src={icon} alt={alt} />
    </styles.Button>
  );
};

export default ButtonForm;
