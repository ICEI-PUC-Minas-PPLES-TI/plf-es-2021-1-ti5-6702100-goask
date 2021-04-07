import styled from "styled-components";

interface Props {
  backgroundColor: string;
  visibility: string;
}

export const Container = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor};
  visibility: ${(props) => props.visibility};
  width: 330px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  padding: 10px;
  p {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    width: 90%;
    padding-left: 10px;
  }
  button {
    border: none;
    background-color: ${(props) => props.backgroundColor};
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border-radius: 20px;
    width: 10%;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.backgroundColor};
      background-color: #fff;
    }

    &:focus {
      outline: none;
    }
  }
  position: fixed;
  bottom: 20px;
  left: 20px;
`;
