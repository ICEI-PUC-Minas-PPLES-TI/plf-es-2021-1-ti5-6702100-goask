import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "../../../modules/components/ContextWrapper";

const HomePage: React.FC = () => {
  const router = useRouter();
  const context = useAppContext();

  const logout = () => {
    localStorage.removeItem("$$access_token");
    localStorage.removeItem("$$token_type");
    router.push("/login");
  };

  const verify = async () => {
    console.log("CONTEXT = ", context);
    setTimeout(() => {
      console.log("CONTEXT = ", context);
    }, 1000);
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
