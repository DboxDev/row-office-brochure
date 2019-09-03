import { createGlobalStyle } from 'styled-components';

const AnimationStyles = createGlobalStyle`
  body {
    background: ${props => props.backgroundColor || '#FFF'};
  }
`;

export default AnimationStyles;
