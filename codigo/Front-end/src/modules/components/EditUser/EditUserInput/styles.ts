import theme from "src/share/styles/themes";
import styled from "styled-components";

export const InputContainer = styled.div`
  min-width: 100%;
  height: 83px;
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconDiv = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  img {
    width: 60px;
    height: 60px;
  }
`;

export const InputDiv = styled.div`
  width: 80%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 80%;
    height: 30px;
    font-weight: 400px;
    font-size: 24px;
    color: #8d8a8a;
    border: none;
    @media (max-width: ${theme.breakpoint.xl}) {
      font-size: 20px;
    }
  }

  input:focus {
    outline: none;
  }
`;
