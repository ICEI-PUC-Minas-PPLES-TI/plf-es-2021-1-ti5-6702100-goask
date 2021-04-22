import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* Só pra arrumar pra entrega */
  margin-top: -30px;
  a {
    text-decoration: none;
    font-size: calc(
      20px + (30 - 20) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: ${(props) => props.theme.colors.menuGrey};
    margin: auto 0px;
    transition-duration: 0.4s;

    &:hover {
      color: ${(props) => props.theme.colors.borders.red};
      cursor: pointer;
    }
  }
`;

export const FirstContainer = styled.div`
  height: 100%;
  border-radius: 0 15px 15px 0;
  background: ${(props) => props.theme.colors.menuBackground};
  max-width: ${(props) => props.theme.breakpoint.xl};
  min-width: ${(props) => props.theme.breakpoint.xs};
  padding: 50px 40px 0 40px;
  margin: 30px 30px 0 0;
  box-shadow: 0 0px 0px 5px ${(props) => props.theme.colors.borders.darkBlue},
    0px 0px 0px 10px ${(props) => props.theme.colors.borders.lightBlue},
    0px 0px 0px 15px ${(props) => props.theme.colors.borders.green},
    0px 0px 0px 20px ${(props) => props.theme.colors.borders.lightGreen},
    0px 0px 0px 25px ${(props) => props.theme.colors.borders.orange},
    0px 0px 0px 30px ${(props) => props.theme.colors.borders.red};
`;

export const SecondContainer = styled.div`
  padding: 50px 55px 0 55px;
  width: 75%;
  max-width: ${(props) => props.theme.breakpoint.xl};
  min-width: ${(props) => props.theme.breakpoint.xs};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;

  div {
    align-content: center;
    img {
      width: calc(
        70px + (110 - 70) *
          ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1024 - 320))
      );
      height: auto;
    }
  }
`;

export const LogoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;

  img {
    width: 25px;
    height: auto;
  }
`;

export const menuContainer = styled.div`
  width: 100%;
  margin: 25px 0px;
`;

export const itemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px 0px;

  img {
    padding: 0 10px 0 0;
    width: 35px;
    height: auto;
  }

  p {
    font-size: calc(
      20px + (30 - 20) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: ${(props) => props.theme.colors.menuGrey};
    margin: auto 0px;
    /* weight: 300; */
  }
`;

export const userContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  position: absolute;
  bottom: 25px;
  img {
    width: 40px;
    height: auto;
  }

  p {
    font-size: calc(
      17px + (22 - 17) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: ${(props) => props.theme.colors.menuGrey};
    font-weight: 300;
    margin: 0 0 0 25px;
  }
`;
