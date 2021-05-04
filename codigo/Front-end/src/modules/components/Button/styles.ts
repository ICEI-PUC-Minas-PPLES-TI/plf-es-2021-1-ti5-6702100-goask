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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    background-color: #26265e;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
