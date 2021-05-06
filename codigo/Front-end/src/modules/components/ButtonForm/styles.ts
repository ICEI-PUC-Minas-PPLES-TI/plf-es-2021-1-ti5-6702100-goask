import styled from "styled-components";

interface Props {
  tooltip?: string;
  color?: string;
  hoverColor?: string;
  brightness?: boolean;
}

export const Button = styled.button<Props>`
  background-color: ${(props) => props.color || props.theme.colors.borders.red};
  width: 90px;
  height: 90px;
  border: none;
  border-radius: 50px;
  transition: 0.5s;

  &:hover:after {
    content: "${(props) => props.tooltip || ""}";
    position: absolute;
    margin-left: 10px;
    padding: 5px;
    border: none;
    color: white;
    background-color: #222;
    border-radius: 20%;
    font-size: 14px;
  }

  &:hover {
    background-color: ${(props) =>
      props.brightness
        ? props.color || props.theme.colors.borders.red
        : props.hoverColor || props.theme.colors.borders.green};
    filter: brightness(${(props) => (props.brightness ? "120%" : "100%")});
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
