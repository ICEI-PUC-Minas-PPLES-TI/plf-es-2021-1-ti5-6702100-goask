import * as styles from "./styles";

interface Content {
  title: string;
}

const IndexHeader: React.FC<Content> = ({ title }) => {
  return (
    <styles.HeaderContainer>
      <div>
        <img className="image" src="/logo.svg" alt="GoAsk" />
      </div>
      <div className="title">{title}</div>
    </styles.HeaderContainer>
  );
};

export default IndexHeader;
