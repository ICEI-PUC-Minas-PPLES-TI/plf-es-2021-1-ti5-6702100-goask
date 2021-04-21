import styled from "styled-components";

export const Container = styled.div`
  background-color: #f1f1f1;
  max-width: 300px;
  max-height: 150px;
  color: #888888;
  padding: 20px;
  color: #c9515c;

  display: flex;
  flex-direction: row;
  gap: 30px;

  img {
    width: 100px;
    height: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 50px;
      font-weight: 700;
    }
  }
`;
