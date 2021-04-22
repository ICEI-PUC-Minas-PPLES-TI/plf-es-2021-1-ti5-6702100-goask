import * as styles from "./styles";

//From components
import IndexImage from "../../components/index/IndexImage";
import IndexFormContainer from "../../components/index/IndexFormContainer";
import FormContainerEditUser from "../../components/EditUser/FormContainerEditUser"

const EditUserPage: React.FC = () => {
    return (
        <styles.Container>
            <IndexFormContainer>
                <FormContainerEditUser/>
            </IndexFormContainer>
            <IndexImage/>
        </styles.Container>
    )
}

export default EditUserPage;