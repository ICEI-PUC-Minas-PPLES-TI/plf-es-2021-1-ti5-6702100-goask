import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../share/styles/global";
import theme from "../share/styles/themes";
import ContextWrapper from "../modules/components/ContextWrapper";
import PrivateRoutes from "src/modules/components/PrivateRoutes";

const GoAsk: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextWrapper>
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
