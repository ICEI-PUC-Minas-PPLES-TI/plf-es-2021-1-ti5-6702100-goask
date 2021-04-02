import theme from "src/share/styles/themes";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #c9515c;

  @media (max-width: ${theme.breakpoint.lg}) {
    flex-direction: column;
    align-items: center;
  }
`;
