import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  #__next{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font: 400 18px Roboto, sans-serif;
  }

  `;
