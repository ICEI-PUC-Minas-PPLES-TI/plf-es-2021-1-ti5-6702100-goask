import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Head from "next/head";

import GlobalStyle from "../share/styles/global";
import theme from "../share/styles/themes";
import ContextWrapper from "../modules/components/ContextWrapper";
import PrivateRoutes from "src/modules/components/PrivateRoutes";

const GoAsk: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextWrapper>
      <Head>
        <title>GoAsk</title>
        <link rel="shortcut icon" href="/logo.ico" type="image/png" />
      </Head>
      <PrivateRoutes>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </PrivateRoutes>
    </ContextWrapper>
  );
};

export default GoAsk;
