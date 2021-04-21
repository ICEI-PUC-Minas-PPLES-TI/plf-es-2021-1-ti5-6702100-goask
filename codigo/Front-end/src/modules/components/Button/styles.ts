import styled from "styled-components";

export const Button = styled.button`
  background-color: #c9515c;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 15px;
  transition: 0.5s;
  color: white;
  font-size: 22px;
  font-weight: 600;

  &:hover {
    background-color: #26265e;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
