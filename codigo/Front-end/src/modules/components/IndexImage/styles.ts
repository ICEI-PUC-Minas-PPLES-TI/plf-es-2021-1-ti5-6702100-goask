import theme from "src/share/styles/themes";
import styled from "styled-components";

export const ImageContainer = styled.div`
  min-height: 100vh;
  min-width: 50%;
  background-color: #c9515c;
  display: flex;
  align-items: center;
  @media (max-width: ${theme.breakpoint.md}) {
    display: none;
  }

  .image-div {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
