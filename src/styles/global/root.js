import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    transition: background-color 300ms ease-in-out;
  }
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
