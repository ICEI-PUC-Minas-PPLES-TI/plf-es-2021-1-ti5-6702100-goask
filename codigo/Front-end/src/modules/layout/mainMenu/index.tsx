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
    context.setUser(null);
    context.setToken(null);
    context.setStatistic(null);
    router.push("/login");
  };

  return (
    <styles.Container>
      <styles.MobileFirstContainer>
        <a href="" className="logo">
          <img src="/logo.svg" alt="GoAsk" height="100" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <Link href="/">
            <li>
              <a href="/">
                <span>
                  <img src="/home.svg" alt="Vá para Dashboard" height="20px" />
                </span>
                &nbsp; Dashboard
              </a>
            </li>
          </Link>
          <Link href="/perfil">
            <li>
              <a>
                <span>
                  <img src="/people.svg" alt="Vá para Perfil" height="20px" />
                </span>
                &nbsp; Perfil
              </a>
            </li>
          </Link>
          <Link href="/mytests">
            <li>
              <a>
                <span>
                  <img src="/quiz.svg" alt="Vá para Quiz" height="20px" />
                </span>
                &nbsp; Quizzes
              </a>
            </li>
          </Link>
          <li>
            <a onClick={logout}>
              <span>
                <img src="/logout.svg" alt="Sair Agora" height="20px" />
              </span>
              &nbsp; Logout
            </a>
          </li>
        </ul>
      </styles.MobileFirstContainer>
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
                Quizzes
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
