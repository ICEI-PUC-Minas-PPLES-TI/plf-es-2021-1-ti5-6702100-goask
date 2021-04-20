import { Token } from "../../../models/Token";
import { AppProps } from "next/app";
import { createContext, useContext, useState } from "react";

interface Content extends AppProps {
  sharedState: string;
}

interface Context {
  sharedState: {
    user: any;
    token: any;
  };
  setState: () => {};
}

const AppContext = createContext<Context>(null);

const ContextWrapper: React.FC<Content> = ({
  Component,
  pageProps,
  sharedState,
  children,
}) => {
  const [token, setToken] = useState();
  const setContextToken = (token) => {
    setToken(token);
  };
  const objectSharedState = {
    sharedState,
    setState: setContextToken,
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
