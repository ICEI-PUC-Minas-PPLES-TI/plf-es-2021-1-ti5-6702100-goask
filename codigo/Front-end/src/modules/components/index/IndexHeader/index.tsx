import * as styles from "./styles";

interface Content {
  title: string;
}

const IndexHeader: React.FC<Content> = ({ title }) => {
  return (
    <styles.HeaderContainer>
      <div>
        <img src="/logo.svg" alt="GoAsk" />
      </div>
      <h1>{title}</h1>
    </styles.HeaderContainer>
  );
};

export default IndexHeader;
