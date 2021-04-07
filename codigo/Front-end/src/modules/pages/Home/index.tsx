import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";

//Form utils
import { check } from "../../../share/utils/loginChecker";

const HomePage: React.FC = () => {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("$$access_token");
    localStorage.removeItem("$$token_type");
    router.push("/login");
  };

  const verify = async () => {
    if (!(await check(localStorage.getItem("$$access_token")))) {
      router.push("/login");
    }
  };

  verify();

  return (
    <styles.Container>
      <div>
        <h1>
          Home
          <br />
          <u onClick={logout}>Logout</u>
        </h1>
      </div>
    </styles.Container>
  );
};

export default HomePage;
