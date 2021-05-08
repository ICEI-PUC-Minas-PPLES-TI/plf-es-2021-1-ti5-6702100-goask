import styled from "styled-components";

interface Props {
  color: string;
}

export const Container = styled.div`
  color: black;
  font-size: 60px;
`;

export const RainbowBlock = styled.span<Props>`
  color: ${(props) => props.color};
`;
