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

export const InputIcon = styled.span`
  padding: 10px;
`;

export const InputDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 30px;
    font-weight: 400;
    font-size: calc(
      17px + (24 - 17) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: #8d8a8a;
    border: none;
  }

  input:focus {
    outline: none;
  }
`;
