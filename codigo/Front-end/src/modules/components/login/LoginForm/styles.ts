import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  border-radius: 0 30px 30px 0;
  background-color: ${(props) => props.theme.colors.background};

  @media (min-width: ${(props) =>
      props.theme.breakpoint.xs}) and (max-width: ${(props) =>
      props.theme.breakpoint.sm}) {
    max-width: ${(props) => props.theme.breakpoint.md};
    width: 100%;
    min-width: ${(props) => props.theme.breakpoint.xs};
    padding: 70px 32px 0 50px;
  }

  @media (max-width: ${(props) => props.theme.breakpoint.md}) {
    max-width: ${(props) => props.theme.breakpoint.md};
    width: 100%;
    min-width: ${(props) => props.theme.breakpoint.sm};
    margin: 0 40px 0 0;
    padding: 70px 42px 0 60px;

    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.borders.darkBlue},
      0 0 0 6px ${(props) => props.theme.colors.borders.lightBlue},
      0 0 0 9px ${(props) => props.theme.colors.borders.green},
      0 0 0 12px ${(props) => props.theme.colors.borders.lightGreen},
      0 0 0 15px ${(props) => props.theme.colors.borders.orange},
      0 0 0 18px ${(props) => props.theme.colors.borders.red};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    max-width: ${(props) => props.theme.breakpoint.lg};
    width: 100%;
    min-width: ${(props) => props.theme.breakpoint.md};
    margin: 0 60px 0 0;
    padding: 70px 52px 0 70px;

    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.borders.darkBlue},
      0 0 0 8px ${(props) => props.theme.colors.borders.lightBlue},
      0 0 0 12px ${(props) => props.theme.colors.borders.green},
      0 0 0 20px ${(props) => props.theme.colors.borders.lightGreen},
      0 0 0 24px ${(props) => props.theme.colors.borders.orange},
      0 0 0 28px ${(props) => props.theme.colors.borders.red};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.xl}) {
    min-width: 47%;
    margin: 0 30px 0 0;
    padding: 70px 70px 0 70px;

    box-shadow: 0 0 0 5px ${(props) => props.theme.colors.borders.darkBlue},
      0 0 0 10px ${(props) => props.theme.colors.borders.lightBlue},
      0 0 0 15px ${(props) => props.theme.colors.borders.green},
      0 0 0 20px ${(props) => props.theme.colors.borders.lightGreen},
      0 0 0 25px ${(props) => props.theme.colors.borders.orange},
      0 0 0 30px ${(props) => props.theme.colors.borders.red};
  }

  & > div {
    border-radius: 0 30px 30px 0;

    & > div:nth-child(2) {
      @media (max-width: ${(props) => props.theme.breakpoint.lg}) {
        padding: 70px 0px 0 0px;
      }

      @media (min-width: ${(props) => props.theme.breakpoint.xl}) {
        padding: 20px 0px 0 0px;
      }
    }
  }
`;
