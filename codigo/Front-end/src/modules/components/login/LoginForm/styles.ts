import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  padding: 80px 80px 0;
  a,
  p {
    font-size: 22px;
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
