import theme from "src/share/styles/themes";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100%;
  min-width: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;

export const QuestionContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  max-width: 100%;
  height: 150px;
  background-color: #fff;
  margin-top: 50px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ButtonsContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  div {
    max-width: 200px;
  }
`;

export const TextContainer = styled.div`
  width: 60%;
`;

export const Header = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${theme.breakpoint.xl}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const CardContainer = styled.div`
  min-width: 100%;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
