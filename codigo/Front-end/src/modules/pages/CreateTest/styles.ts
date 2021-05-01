import styled from "styled-components";

export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100%;
  min-width: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;

export const ContentContainer = styled.div`
  max-width: 70%;
  height: 150px;
  background-color: #fff;
  margin-bottom: 50px;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
