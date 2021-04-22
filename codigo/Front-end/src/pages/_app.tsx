import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../share/styles/global";
import theme from "../share/styles/themes";
import ContextWrapper from "../modules/components/ContextWrapper";
import PrivateRoutes from "src/modules/components/PrivateRoutes";
import MainMenu from "../modules/layout/mainMenu";

const GoAsk: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextWrapper>
      <PrivateRoutes>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MainMenu>
            <Component {...pageProps} />
          </MainMenu>
        </ThemeProvider>
      </PrivateRoutes>
    </ContextWrapper>
  );
};

export default GoAsk;
