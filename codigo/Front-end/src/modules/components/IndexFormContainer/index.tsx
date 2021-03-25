import * as styles from "./styles";
import IndexHeader from "../IndexHeader";

const IndexFormContainer: React.FC = () => {
  return (
    <styles.BorderContainer>
      <div className="border light-green">
        <div className="border green">
          <div className="border light-blue">
            <div className="border dark-blue">
              <styles.FormContainer className="border">
                <IndexHeader title="Login"></IndexHeader>
              </styles.FormContainer>
            </div>
          </div>
        </div>
      </div>
    </styles.BorderContainer>
  );
};

export default IndexFormContainer;
