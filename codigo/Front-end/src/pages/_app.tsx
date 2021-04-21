import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../share/styles/global";
import theme from "../share/styles/themes";
import ContextWrapper, {
  useAppContext,
} from "../modules/components/ContextWrapper";
import { useEffect } from "react";
import { getUser } from "src/share/api/api";
import { User } from "@models/User";
import { useRouter } from "next/router";
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

// export async function getStaticProps(context) {
//     const access_token = sessionStorage.getItem("$$access_token");
//     const token_type = sessionStorage.getItem("$$token_type");

//     if (!access_token || !token_type) {
//       routes.push("/login");
//     }

//     //salva o contexto
//     context.setToken({ access_token, token_type });

//     //caça o usuário
//     const user: User = await getUser({ access_token, token_type });

//     //salva o usuário
//     context.setUser(user);

//     routes.push("/");

//   return {
//     props: {},
//   };
// }
