import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "../../../modules/components/ContextWrapper";

//From next
import Link from "next/link";

const HomePage: React.FC = () => {
  const router = useRouter();
  const context = useAppContext();

  const logout = () => {
    localStorage.removeItem("$$access_token");
    localStorage.removeItem("$$token_type");
    router.push("/login");
  };

  return (
    <styles.Container>
      <div>
        <h1>
          Home
          <br />
          <u onClick={logout}>Logout</u>
          <br />
          <Link href="/mytests">
            <a>Meus quizes</a>
          </Link>
        </h1>
      </div>
    </styles.Container>
  );
};

export default HomePage;
