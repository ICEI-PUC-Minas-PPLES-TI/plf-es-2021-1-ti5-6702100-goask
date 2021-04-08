import styled from "styled-components";

interface Props {
  backgroundColor: string;
  visibility: string;
}

export const Container = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor};
  visibility: ${(props) => props.visibility};
  width: 300px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    width: 70%;
    padding-left: 10px;
    text-align: center;
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
    }

    &:focus {
      outline: none;
    }
  }
  position: fixed;
  bottom: 20px;
  left: 20px;
`;
