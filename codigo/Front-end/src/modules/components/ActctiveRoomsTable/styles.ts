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
  td {
    padding: 20px 20px;
    text-align: center;
    a {
      text-decoration: none;
      color: #c9515c;
      transition: 0.5s;

      &:hover {
        cursor: pointer;
        color: #26265e;
      }
    }
  }
  th {
    padding: 20px 20px;
    text-align: center;
    background-color: #c9515c;
    color: white;
  }
  tr {
    color: black;
    font-weight: 700;
    background-color: #f7f7f7;
  }
  tbody tr {
    :nth-of-type(odd) {
      background-color: #fff;
    }
    :hover {
      cursor: pointer;
    }
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
