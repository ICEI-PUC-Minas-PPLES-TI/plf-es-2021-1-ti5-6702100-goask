import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";


const mainMenu: React.FC = ({children}) => {

    const router = useRouter();

    const logout = () => {
      localStorage.removeItem("$$access_token");
      localStorage.removeItem("$$token_type");
      router.push("/login");
    };

  return (
    <styles.Container>
        <styles.FirstContainer>
            <styles.LogoutContainer><u onClick={logout}><img src="/logout.svg" alt="Sair Agora" /></u></styles.LogoutContainer>
        <styles.HeaderContainer>
      <div>
        <img src="/logo.svg" alt="GoAsk" />
      </div>
    </styles.HeaderContainer>
            <styles.menuContainer>
            <styles.itemContainer><p onClick={logout}><img src="/home.svg" alt="Vá para Dashboard" />Dashboard</p></styles.itemContainer>
          
          <styles.itemContainer><p onClick={logout}><img src="/people.svg" alt="Vá para Perfil" />Perfil</p></styles.itemContainer>
          
          <styles.itemContainer><p onClick={logout}><img src="/quiz.svg" alt="Vá para Quiz" />Quiz</p></styles.itemContainer>
          
      </styles.menuContainer>
      <styles.userContainer><span><img src="/avatar.png" height="auto" width="auto" alt="Meu perfil" /></span><p> Ricardo</p></styles.userContainer>
      </styles.FirstContainer>
        <styles.SecondContainer>{children}</styles.SecondContainer>
    </styles.Container>
  );
};

export default mainMenu;