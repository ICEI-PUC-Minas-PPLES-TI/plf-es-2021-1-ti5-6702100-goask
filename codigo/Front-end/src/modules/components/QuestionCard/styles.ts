import styled from "styled-components";

interface Props {
  visibility: string;
  open: boolean;
}

export const MainContainer = styled.div`
  min-width: 100%;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  p {
    height: 100%;
    color: #c9515c;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  padding: 20px 50px 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-radius: 20px;
  p {
    width: 90%;
  }
  button {
    width: 40%;
  }
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

export const Body = styled.div<Props>`
  max-height: ${(props) => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.open ? "25px 0" : "0")};
  transition: all 0.3s ease-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    max-width: 50%;
  }
`;
