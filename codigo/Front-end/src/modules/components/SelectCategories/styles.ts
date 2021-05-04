import theme from "src/share/styles/themes";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const SelectDiv = styled.div`
  width: 100%;
  height: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-weight: 700;
  color: #888;

  label {
    height: 30px;
    font-weight: 400px;
    font-size: 24px;
  }
`;

export const SelectDefault = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  font-weight: 400px;
  font-size: 20px;

  &:focus {
    outline: none;
  }

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    font-weight: 500;
  }
`;
