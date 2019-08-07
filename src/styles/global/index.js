import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    background: grey;
  }
  body, #root {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
