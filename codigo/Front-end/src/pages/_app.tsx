import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../share/styles/global";
import theme from "../share/styles/themes";
import { createContext, useContext } from "react";
import { loginUser } from "../share/api/api";
import { Token } from "../models/Token";
import ContextWrapper from "../modules/components/ContextWrapper";

const GoAsk: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextWrapper sharedState={}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextWrapper>
  );
};

export default GoAsk;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
