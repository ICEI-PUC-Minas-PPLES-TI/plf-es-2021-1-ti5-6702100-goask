import theme from "src/share/styles/themes";
import styled from "styled-components";

export const ImageContainer = styled.div`
  min-height: 100vh;
  min-width: 50%;
  background-color: #c9515c;
  display: flex;
  align-items: center;
  @media (max-width: ${theme.breakpoint.lg}) {
    display: none;
  }

  div {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 450px;
      width: 450px;
    }
  }
`;
