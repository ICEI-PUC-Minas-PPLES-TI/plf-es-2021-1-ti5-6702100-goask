import * as styles from "./styles";

//From next
import Link from "next/link";

//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "../../components/ContextWrapper";

const mainMenu: React.FC = ({ children }) => {
  const router = useRouter();
  const context = useAppContext();

  const logout = () => {
    sessionStorage.removeItem("$$access_token");
    sessionStorage.removeItem("$$token_type");
    router.push("/login");
  };

  return (
    <styles.Container>
      <styles.FirstContainer>
        <styles.LogoutContainer>
          <u onClick={logout}>
            <img src="/logout.svg" alt="Sair Agora" />
          </u>
        </styles.LogoutContainer>
        <styles.HeaderContainer>
          <div>
            <img src="/logo.svg" alt="GoAsk" />
          </div>
        </styles.HeaderContainer>
        <styles.menuContainer>
          <Link href="/">
            <a>
              <styles.itemContainer>
                <img src="/home.svg" alt="Vá para Dashboard" />
                Dashboard
              </styles.itemContainer>
            </a>
          </Link>
          <Link href="/perfil">
            <a>
              <styles.itemContainer>
                <img src="/people.svg" alt="Vá para Perfil" />
                Perfil
              </styles.itemContainer>
            </a>
          </Link>
          <Link href="/mytests">
            <a>
              <styles.itemContainer>
                <img src="/quiz.svg" alt="Vá para Quiz" />
                Quizes
              </styles.itemContainer>
            </a>
          </Link>
        </styles.menuContainer>
        <styles.userContainer>
          <span>
            <img
              src="/user-default.svg"
              height="auto"
              width="auto"
              alt="Meu perfil"
            />
          </span>
          <p>{context?.user ? context.user.name : ""}</p>
        </styles.userContainer>
      </styles.FirstContainer>
      <styles.SecondContainer>{children}</styles.SecondContainer>
    </styles.Container>
  );
};

export default mainMenu;
