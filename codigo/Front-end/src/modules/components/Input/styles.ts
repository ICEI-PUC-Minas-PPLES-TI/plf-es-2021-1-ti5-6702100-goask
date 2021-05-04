import theme from "src/share/styles/themes";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const InputDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #888;

  label {
    height: 30px;
    font-weight: 400px;
    font-size: 24px;
  }

  input {
    width: 80%;
    font-weight: 400px;
    font-size: 24px;
    height: 30px;
    color: #8d8a8a;
    border: none;
    border-bottom: 3px solid #888;
    @media (max-width: ${theme.breakpoint.xl}) {
      font-size: 20px;
    }
  }

  input:focus {
    outline: none;
  }
`;
