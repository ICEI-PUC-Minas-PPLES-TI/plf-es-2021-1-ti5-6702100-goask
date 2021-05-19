import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TestsTable = styled.table`
  min-width: 100%;
  height: 100%;
  caption-side: top;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;

  td,
  th {
    border: none;
  }
  td:first-child,
  th:first-child {
    padding: 20px 20px;
  }
  td {
    text-align: center;
    a {
      text-decoration: none;
      color: #c9515c;

      &:hover {
        cursor: pointer;
        color: #26265e;
      }
    }
  }
  th {
    padding: 10px 8px;
    text-align: center;
    background-color: #c9515c;
    color: white;
  }
  tr > th:first-child {
    font-size: 18px;
  }
  tr > td :first-child {
    font-size: 18px;
  }
  tr {
    color: black;
    background-color: #f7f7f7;
    font-size: 14px;
    font-weight: 700;
  }
  tbody tr {
    transition: 0.5s;
    :nth-of-type(odd) {
      background-color: #fff;
    }
    :hover {
      cursor: pointer;
      transform: scale(1.03);
    }
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
