import { createGlobalStyle } from 'styled-components';

const Typographystyles = createGlobalStyle`
  html, body {
    font-smooth: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'SangBleu Kingdom', serif;
    font-weight: normal;
    font-style: normal;
  }

  li, p, button, th, tr, td, form, span {
    font-family: 'Apercu', 'sans-serif';
    font-weight: normal;
    font-style: normal;
    letter-spacing: 1px;
  }
  
  .underline {
    text-decoration: underline;
  }

  a {
    &:link,
    &:active,
    &:focus,
    &:visited {
      color: inherit;
    }
  }
`;

export default Typographystyles;
