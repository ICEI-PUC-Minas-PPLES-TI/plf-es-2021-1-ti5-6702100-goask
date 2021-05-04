import { Token } from "../../../models/Token";
import { User } from "../../../models/User";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
interface Context {
  user: User;
  token: Token;
  setUser: Dispatch<SetStateAction<User>>;
  setToken: Dispatch<SetStateAction<Token>>;
}

const AppContext = createContext<Context>(null);

const ContextWrapper: React.FC = ({ children }) => {
  const [token, setToken] = useState<Token>();
  const [user, setUser] = useState<User>();

  const objectSharedState = {
    token,
    user,
    setUser,
    setToken,
  };

  return (
    <AppContext.Provider value={objectSharedState}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;

export function useAppContext() {
  return useContext(AppContext);
}
