import { createGlobalStyle } from 'styled-components';

const BackgroundStyles = createGlobalStyle`
  body {
    background: ${props => props.backgroundColor || '#FFF'}
  }
`;

export default BackgroundStyles;
