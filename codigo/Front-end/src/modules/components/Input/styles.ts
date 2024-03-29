import theme from "src/share/styles/themes";
import styled from "styled-components";

interface Props {
  color?: string;
}

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const InputDiv = styled.div<Props>`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-weight: 700;
  color: ${(props) => props.color || "#888"};
  padding: 20px;

  label {
    height: 30px;
    font-weight: 400px;
    font-size: 24px;
  }

  input {
    width: 80%;
    font-weight: 500;
    font-size: 24px;
    height: 30px;
    color: #8d8a8a;
    border: none;
    border-bottom: 3px solid ${(props) => props.color || "#888"};
    @media (max-width: ${theme.breakpoint.xl}) {
      font-size: 20px;
    }
  }

  input:focus {
    outline: none;
  }
`;
