import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  div {
    align-content: center;
    img {
      width: calc(
        110px + (145 - 110) *
          ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1024 - 320))
      );
      height: auto;
    }
    margin: 0 0 40px 0;
  }

  h1 {
    font-size: calc(
      35px + (50 - 35) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    font-weight: bolder;
    margin: auto 0px;
  }
`;
