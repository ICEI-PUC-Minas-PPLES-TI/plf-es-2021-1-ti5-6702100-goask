import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
`;

export const FormContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;

  a,
  p {
    font-size: calc(
      18px + (22 - 18) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: #c9515c;
    font-weight: 500;
    text-decoration: none;
  }
  a:hover {
    color: #26265e;
    transition: 0.5s;
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
