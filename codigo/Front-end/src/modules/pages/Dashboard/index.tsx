import * as styles from "./styles";

//Hooks
import { useRouter } from "next/router";
import { useAppContext } from "src/modules/components/ContextWrapper";

//From next
import Link from "next/link";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const context = useAppContext();

  return (
    <styles.Container>
      <h1>Dashboard</h1>
      <styles.ButtonContainer>
        <styles.Button onClick={() => router.push("/perfil")}>
          <p>Meu perfil</p>
          <span>
            <img src="/arrow-right.svg" alt="Vá para Perfil" />
          </span>
        </styles.Button>
        <styles.Button onClick={() => router.push("/mytests")}>
          <p>Meus Quizzes</p>
          <span>
            <img src="/arrow-right.svg" alt="Vá para os quizzes" />
          </span>
        </styles.Button>
        <styles.Button onClick={() => router.push("/relatory")}>
          <p>Relatório</p>
          <span>
            <img src="/arrow-right.svg" alt="Vá para o relatório" />
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
              <h6>{context.statistic?.qtd_tests || 0}</h6>
              <p>
                {context.statistic?.qtd_tests === 1
                  ? "Teste criado"
                  : "Testes criados"}
              </p>
            </div>
          </styles.FeaturesStaticsContainer>
          <styles.FeaturesStaticsContainer>
            <span>
              <img src="/console.svg" alt="Recorde de Pontos" />
            </span>
            <div>
              <h6>{context.statistic?.qtd_rooms || 0}</h6>
              <p>
                {context.statistic?.qtd_rooms === 1
                  ? "Sala criada"
                  : "Salas criadas"}
              </p>
            </div>
          </styles.FeaturesStaticsContainer>
          <Link href="/activeRooms">
            <styles.FeaturesStaticsContainer>
              <span>
                <img src="/checked.svg" alt="Jogos Ganhos" />
              </span>
              <div>
                <h6>{context.statistic?.qtd_rooms_actives || 0}</h6>
                <p>
                  {context.statistic?.qtd_rooms_actives === 1
                    ? "Sala ativa"
                    : "Salas ativas"}
                </p>
              </div>
            </styles.FeaturesStaticsContainer>
          </Link>
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
