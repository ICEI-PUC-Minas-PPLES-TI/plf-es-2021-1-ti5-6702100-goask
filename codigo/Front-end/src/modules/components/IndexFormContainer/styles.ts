import theme from "src/share/styles/themes";
import styled from "styled-components";

export const BorderContainer = styled.div`
  min-height: 100vh;
  min-width: 50%;
  background-color: #f27225;
  border-radius: 0 30px 30px 0;
  @media (max-width: ${theme.breakpoint.md}) {
    min-width: 100%;
  }
  .border {
    min-height: 100vh;
    width: 99%;
    border-radius: 0 30px 30px 0;
  }
  .light-green {
    background-color: #32b24a;
  }
  .green {
    background-color: #139882;
  }
  .light-blue {
    background-color: #125daa;
  }
  .dark-blue {
    background-color: #26265e;
  }
`;

export const FormContainer = styled.div`
  background-color: #f3f3f3;
`;
