//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "../../../modules/components/ContextWrapper";

const HomePage: React.FC = () => {
  const router = useRouter();
  const context = useAppContext();

  const logout = () => {
    sessionStorage.removeItem("$$access_token");
    sessionStorage.removeItem("$$token_type");
    router.push("/login");
  };

  const editar = () => {
    router.push("/editUser");
  };

  return (
    <div>
      <h1>
        Home
        <br />
        <u onClick={logout}>Logout</u>
        <br />
        <u onClick={editar}>editar dados cadastrais</u>
      </h1>
    </div>
  );
};

export default HomePage;
