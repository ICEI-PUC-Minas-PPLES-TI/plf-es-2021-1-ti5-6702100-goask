import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";

//From next
import Link from "next/link";

const Dashboard: React.FC = () => {
  const router = useRouter();

  return (
    <styles.Container>
      <h1>Dashboard</h1>
      <styles.ButtonContainer>
        <styles.Button>
          <p>Meu perfil</p>
          <span>
            <img src="/arrow-right.svg" alt="Vá para Perfil" />
          </span>
        </styles.Button>
        <styles.Button onClick={() => router.push("/mytests")}>
          <p>Meus Quizzes</p>
          <span>
            <img src="/arrow-right.svg" alt="Vá para Perfil" />
          </span>
        </styles.Button>
        {/* <styles.Button>
          <p>Meus Relatorios</p>
          <span>
            <img src="/arrow-right.svg" alt="Vá para Perfil" />
          </span>
        </styles.Button> */}
      </styles.ButtonContainer>
      <styles.FeaturesContainer>
        <styles.FeaturesStatics>
          <styles.FeaturesStaticsContainer>
            <span>
              <img src="/trophy.svg" alt="Jogos Ganhos" />
            </span>
            <div>
              <h6>X</h6>
              <p>XXX</p>
            </div>
          </styles.FeaturesStaticsContainer>
          <styles.FeaturesStaticsContainer>
            <span>
              <img src="/console.svg" alt="Recorde de Pontos" />
            </span>
            <div>
              <h6>X</h6>
              <p>XXX</p>
            </div>
          </styles.FeaturesStaticsContainer>
          <styles.FeaturesStaticsContainer>
            <span>
              <img src="/checked.svg" alt="Jogos Ganhos" />
            </span>
            <div>
              <h6>X</h6>
              <p>XXX</p>
            </div>
          </styles.FeaturesStaticsContainer>
        </styles.FeaturesStatics>
        <styles.FeaturesBeginQuiz>
          {/* <styles.InputDiv>
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
          </styles.InputDiv> */}
          <Link href="/createtest">
            <a>
              <button>
                <p>Criar Quiz</p>
                <span>
                  <img src="/arrow-right.svg" alt="Crie Quiz" />
                </span>
              </button>
            </a>
          </Link>
        </styles.FeaturesBeginQuiz>
      </styles.FeaturesContainer>
    </styles.Container>
  );
};

export default Dashboard;
