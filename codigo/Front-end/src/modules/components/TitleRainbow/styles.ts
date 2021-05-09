import styled from "styled-components";

interface Props {
  color: string;
}

export const Container = styled.div`
  color: black;
  font-size: 40px;
`;

export const RainbowBlock = styled.span<Props>`
  color: ${(props) => props.color};
  font-weight: 700;
  text-shadow: 0px 0px 3px ${(props) => props.color};
`;
