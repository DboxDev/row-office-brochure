import { createGlobalStyle } from 'styled-components';

const Typographystyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'SangBleu Kingdom', serif;
    font-weight: normal;
    font-style: normal;
  }
  p {
    font-family: 'Apercu', 'sans-serif';
    font-weight: 300;
    font-style: normal;
  }
  
  .underline {
    text-decoration: underline;
  }

  a {
    &:link,
    &:active,
    &:focus,
    &:visited {
      color: inherited;
    }
  }
`;

export default Typographystyles;
