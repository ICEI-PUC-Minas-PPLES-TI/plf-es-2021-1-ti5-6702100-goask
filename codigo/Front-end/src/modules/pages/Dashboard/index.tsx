import * as styles from "./styles";

import MainMenu from "../../layout/mainMenu";

//Hooks
import { useRouter } from "next/router";

//Form utils
import { check } from "../../../share/utils/loginChecker";

const Dashboard: React.FC = () => {
  const router = useRouter();

  // const verify = async () => {
  //   if (!(await check(localStorage.getItem("$$access_token")))) {
  //     router.push("/login");
  //   }
  // };

  // verify();

  return (
    <styles.Container>
      <MainMenu>
        <h1>Dashboard</h1>
        <styles.ButtonContainer>
          <styles.Button>
            <p>Meu perfil</p>
            <span>
              <img src="/arrow-right.svg" alt="Vá para Perfil" />
            </span>
          </styles.Button>
          <styles.Button>
            <p>Meus Quizzes</p>
            <span>
              <img src="/arrow-right.svg" alt="Vá para Perfil" />
            </span>
          </styles.Button>
          <styles.Button>
            <p>Meus Relatorios</p>
            <span>
              <img src="/arrow-right.svg" alt="Vá para Perfil" />
            </span>
          </styles.Button>
        </styles.ButtonContainer>
        <styles.FeaturesContainer>
          <styles.FeaturesStatics>
            <styles.FeaturesStaticsContainer>
              <span>
                <img src="/trophy.svg" alt="Jogos Ganhos" />
              </span>
              <div>
                <h6>3</h6>
                <p>Jogos Ganhos</p>
              </div>
            </styles.FeaturesStaticsContainer>
            <styles.FeaturesStaticsContainer>
              <span>
                <img src="/console.svg" alt="Recorde de Pontos" />
              </span>
              <div>
                <h6>850</h6>
                <p>Recorde de Pontos</p>
              </div>
            </styles.FeaturesStaticsContainer>
            <styles.FeaturesStaticsContainer>
              <span>
                <img src="/checked.svg" alt="Jogos Ganhos" />
              </span>
              <div>
                <h6>1035</h6>
                <p>Perguntas Acertadas</p>
              </div>
            </styles.FeaturesStaticsContainer>
          </styles.FeaturesStatics>
          <styles.FeaturesBeginQuiz>
            <styles.InputDiv>
              <styles.InputIcon>
                <img
                  src="/quiz_door.svg"
                  height="50px"
                  width="50px"
                  alt="Vá para o seu Quiz"
                />
              </styles.InputIcon>
              <styles.FeaturesInput
                type="text"
                placeholder="Digite o nome do quiz"
                alt="Quiz"
                name="quiz"
              ></styles.FeaturesInput>
            </styles.InputDiv>
            <button>
              <p>Criar Quiz</p>
              <span>
                <img src="/arrow-right.svg" alt="Crie Quiz" />
              </span>
            </button>
          </styles.FeaturesBeginQuiz>
        </styles.FeaturesContainer>
      </MainMenu>
    </styles.Container>
  );
};

export default Dashboard;
