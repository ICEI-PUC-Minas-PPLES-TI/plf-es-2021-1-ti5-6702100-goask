import styled from "styled-components";

export const Button = styled.button`
  background-color: #c9515c;
  width: 90px;
  height: 90px;
  border: none;
  border-radius: 50px;
  transition: 0.5s;

  &:hover {
    background-color: #26265e;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
