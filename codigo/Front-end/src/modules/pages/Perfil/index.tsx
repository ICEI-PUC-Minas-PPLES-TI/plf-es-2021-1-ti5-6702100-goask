import * as styles from "./styles";
import Link from "next/link";

import ButtonForm from "../../components/ButtonForm";

//From components

const Perfil: React.FC = () => {
  return (
    <styles.Container>
      <styles.SubHeader>
        <styles.TitleContainer>
          <h1>Perfil</h1>
        </styles.TitleContainer>
        <styles.ButtonContainer>
          <styles.Button>
            <p>Entrar em Jogo</p>
          </styles.Button>

          <styles.Button>
            <Link href="/createtest">
              <p>Criar o Quiz</p>
            </Link>
          </styles.Button>
        </styles.ButtonContainer>
      </styles.SubHeader>
      <styles.UserStaticsContainer>
        <styles.UserImageContainer>
          <img src="/avatar.png" alt="Sua foto de perfil" />
        </styles.UserImageContainer>
        <styles.UserDetailsContainer>
          <styles.UserIdentityContainer>
            <h1>
              Ricardo C. Da Silva
              <Link href="/editUser">
                <img src="/edit.svg" alt="Edite o seu perfil agora" />
              </Link>
            </h1>
            <h6>sp.am@skeavee.com</h6>
          </styles.UserIdentityContainer>
          <styles.UserStaticsDetailsContainer>
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
          </styles.UserStaticsDetailsContainer>
        </styles.UserDetailsContainer>
      </styles.UserStaticsContainer>
      <styles.SubToolsContainer>
        <styles.SubtoolQuizzesContainer>
          <h6>Meus quizzes</h6>
          <p>
            Veja aqui todos os quiz criados até o momento, tendo chance de criar
            novos quizzes e/ou editá-los.
          </p>
          <div>
            <Link href="/mytests">
              <button>
                <img src="/arrow-right.svg" alt="Os meus quizzes" />
              </button>
            </Link>
          </div>
        </styles.SubtoolQuizzesContainer>
        <styles.UserDataContainer>
          <h6>Dados Pessoais</h6>
          <p>
            <p>
              <b>Nome: </b>
            </p>
            <p>
              <b>Username: </b>
            </p>
            <p>
              <b>Senha: </b>
            </p>
            <p>
              <b>Inscrito na data de: </b>
            </p>
          </p>
        </styles.UserDataContainer>
      </styles.SubToolsContainer>
    </styles.Container>
  );
};

export default Perfil;
