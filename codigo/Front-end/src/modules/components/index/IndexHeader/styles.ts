import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 80px 0;
  div {
    align-self: center;
    img {
      min-width: 130px;
      min-height: 130px;
    }
  }
  h1 {
    font-size: 50px;
    font-weight: bolder;
  }
`;
