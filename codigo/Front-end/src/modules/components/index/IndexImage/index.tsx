import * as styles from "./styles";
import Image from "next/image";

const IndexImage: React.FC = () => {
  return (
    <styles.ImageContainer>
      <div className="image-div">
        <Image src="/background.svg" alt="Login" width="450" height="450" />
      </div>
    </styles.ImageContainer>
  );
};

export default IndexImage;
