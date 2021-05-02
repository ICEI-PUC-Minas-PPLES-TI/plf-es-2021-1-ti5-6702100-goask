import styled from "styled-components";

interface Props {
  color: string;
  fontColor: string;
}

export const Container = styled.div<Props>`
  min-width: 70px;
  min-height: 40px;
  color: ${(props) => props.fontColor || "#FFF"};
  background-color: ${(props) => props.color || "#000"};
  border-radius: 30px;

  &:hover {
    filter: saturate(30%);
    cursor: default;
  }

  p {
    width: 100%;
    text-align: center;
  }
`;
