import * as styles from "./styles";
import Image from "next/image";

interface Content {
  title: string;
}

const IndexHeader: React.FC<Content> = (props: Content) => {
  return (
    <styles.HeaderContainer>
      <div>
        <Image
          className="image"
          src="/logo.svg"
          alt="GoAsk"
          width="130px"
          height="130px"
        />
      </div>
      <div className="title">{props.title}</div>
    </styles.HeaderContainer>
  );
};

export default IndexHeader;
