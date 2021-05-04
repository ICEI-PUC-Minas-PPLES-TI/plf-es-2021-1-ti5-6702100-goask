//api
import { getUser } from "src/share/api/api";
import { verifyToken } from "../../../share/api/api";

//componentes
import { useAppContext } from "../../../modules/components/ContextWrapper";

//models
import { User } from "../../../models/User";

//Hooks
import { useEffect } from "react";
import { useRouter } from "next/router";

const PrivateRoutes: React.FC = ({ children }) => {
  const routes = useRouter();
  const context = useAppContext();

  const setup = async () => {
    const access_token = sessionStorage.getItem("$$access_token");
    const token_type = sessionStorage.getItem("$$token_type");
    if (!access_token || !token_type) {
      routes.push("/login");
      return;
    }
    const validToken = await verifyToken({ access_token, token_type });
    if (!validToken) {
      routes.push("/login");
      return;
    }

    //salva o contexto
    context.setToken({ access_token, token_type });

    //caça o usuário
    const user: User = await getUser({ access_token, token_type });

    //salva o usuário
    context.setUser(user);

    routes.push("/");
  };

  useEffect(() => {
    setup();
  }, []);

  return <>{children}</>;
};

export default PrivateRoutes;
