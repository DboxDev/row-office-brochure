import { createGlobalStyle } from 'styled-components';

const ContainerStyles = createGlobalStyle`
  .container {
    width: 90%;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 120px;
  }
  .contact-container {
    width: 90%;
    margin: 0 auto;
    padding-top: 120px;
    height: 100%;
    display: flex;
    align-items: center;
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
