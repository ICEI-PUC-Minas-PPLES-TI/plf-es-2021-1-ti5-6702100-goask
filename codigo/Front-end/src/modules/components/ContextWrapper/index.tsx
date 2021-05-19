import { Token } from "../../../models/Token";
import { User } from "../../../models/User";
import { Statistic } from "../../../models/Statistic";

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
  statistic: Statistic;
  setUser: Dispatch<SetStateAction<User>>;
  setToken: Dispatch<SetStateAction<Token>>;
  setStatistic: Dispatch<SetStateAction<Statistic>>;
}

const AppContext = createContext<Context>(null);

const ContextWrapper: React.FC = ({ children }) => {
  const [token, setToken] = useState<Token>();
  const [user, setUser] = useState<User>();
  const [statistic, setStatistic] = useState<Statistic>();

  const objectSharedState = {
    token,
    user,
    statistic,
    setUser,
    setToken,
    setStatistic,
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
