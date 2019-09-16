import { createGlobalStyle } from 'styled-components';
import { mediaMin } from 'styles/mediaQueries';

const ContainerStyles = createGlobalStyle`
  .container {
    width: 90%;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 120px;
  }
  .full-width-container {
    width: 100%;
    padding-top: 120px;
    padding-bottom: 120px;
  }
  .contact-container {
    width: 90%;
    margin: 0 auto;
    padding-top: 120px;
    height: 100%;
    align-items: center;
    ${mediaMin.tabletLandscape`
      display: flex;
    `}
  }
  .full-height-container {
    width: 90%;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 120px;
    height: 100%;
  }
`;

export default ContainerStyles;
