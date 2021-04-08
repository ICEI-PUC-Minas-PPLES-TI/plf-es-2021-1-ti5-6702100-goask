import * as styles from "./styles";

const IndexFormContainer: React.FC = ({ children }) => {
  return (
    <styles.BorderContainer>
      <div className="border light-green">
        <div className="border green">
          <div className="border light-blue">
            <div className="border dark-blue">{children}</div>
          </div>
        </div>
      </div>
    </styles.BorderContainer>
  );
};

export default IndexFormContainer;
