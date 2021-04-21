import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const TestsTable = styled.table`
  width: 100%;
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
  }
  tbody tr {
    :nth-of-type(even) {
      background-color: #f7f7f7;
    }
    :hover {
      cursor: pointer;
      background-color: #e5e5e5;
    }
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
