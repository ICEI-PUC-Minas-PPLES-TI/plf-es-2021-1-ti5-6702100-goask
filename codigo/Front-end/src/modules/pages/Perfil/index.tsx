import * as styles from "./styles";
import Link from "next/link";

//From components
import { useAppContext } from "../../components/ContextWrapper";
import Modal from "../../components/Modal";
import { useModal } from "../../utils/useModal";
import Snackbar from "../../components/SnackBar";
import EditUserContentModal from "../../components/EditUserContentModal";

//From models
import { User, UpdateUser } from "../../../models/User";

//From Hooks
import { useEffect, useState } from "react";

//api
import { updateUser } from "src/share/api/api";

const Perfil: React.FC = () => {
  const context = useAppContext();

  const { isShown, toggle } = useModal();
  const [showBar, setShowBar] = useState(false);
  const [color, setColor] = useState("#34B04A");
  const [message, setMessage] = useState("");

  const onConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.currentTarget.username.value;
    const email = e.currentTarget.email.value;
    if (name && email) {
      const userUpdate: UpdateUser = {
        name: name,
        email: email,
      };
      const response: User = await updateUser(context.token, userUpdate);
      if (response) {
        context.setUser(response);
        setColor("#34B04A");
        setMessage("Dados alterados com sucesso");
        setShowBar(true);
        setTimeout(() => {
          setShowBar(false);
        }, 5000);
        toggle();
      } else {
        setColor("#BD232F");
        setMessage("Email desejado já existe, tente outro");
        setShowBar(true);
        setTimeout(() => {
          setShowBar(false);
        }, 5000);
      }
    }
  };

  return (
    <styles.Container>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Alterar Cadastro"
        modalContent={
          <EditUserContentModal
            onConfirm={onConfirm}
            name={context?.user?.name}
            email={context?.user?.email}
          />
        }
      />
      {showBar ? (
        <Snackbar message={message} backgroundColor={color} timer={5000} />
      ) : (
        <></>
      )}
      <styles.SubHeader>
        <styles.TitleContainer>
          <h1>Perfil</h1>
        </styles.TitleContainer>
        <styles.ButtonContainer>
          <styles.Button onClick={toggle}>
            <p>Editar Perfil</p>
          </styles.Button>

          <styles.Button>
            <Link href="/createtest">
              <p>Criar Quiz</p>
            </Link>
          </styles.Button>
        </styles.ButtonContainer>
      </styles.SubHeader>
      <styles.UserStaticsContainer>
        <styles.UserImageContainer>
          <img src="/user-default.svg" alt="Sua foto de perfil" />
        </styles.UserImageContainer>
        <styles.UserDetailsContainer>
          <styles.UserIdentityContainer>
            <h1>{context?.user?.name}</h1>
            <h6>{context?.user?.email}</h6>
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
              <b>Nome: {context?.user?.name} </b>
            </p>
            <p>
              <b>Username: {context?.user?.name}</b>
            </p>
            <p>
              <b>email: {context?.user?.email}</b>
            </p>
            <p>
              <b>Ultima atualização: {context?.user?.updatedAt}</b>
            </p>
          </p>
        </styles.UserDataContainer>
      </styles.SubToolsContainer>
    </styles.Container>
  );
};

export default Perfil;
