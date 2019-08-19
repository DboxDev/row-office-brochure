import styled from 'styled-components';

const ScrollColumn = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 100%;
  width: fit-content;
  max-height: 100vh;
  padding: 10%;
  opacity: ${props => (props.revealed ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
  ${props => (props['space-between'] ? 'justify-content: space-between;' : '')}
`;

const BlackSlide = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #000;
  transform: ${props => (props.revealed ? 'traslateY(0)' : 'translateY(100%)')};
  transition: transform 1s ease-in-out;
  p.quote {
    font-size: 32px;
    color: #fff;
    width: 50%;
  }
  span.credit {
    font-size: 32px;
    color: #fff;
    width: 50%;
  }
  span.scroll-reminder {
    position: absolute;
    bottom: 5%;
    font-size: 16px;
    color: #fff;
  }
`;

const BigText = styled.h3`
  font-size: 55px;
  color: ${props => (props.black ? '#000' : '#5a5a5a')};
  ${props => (props['margin-top'] ? 'margin-top: auto;' : 'margin-top: 5%;')}
`;

const MedText = styled.h3`
  ${props => (props['margin-top'] ? 'margin-top: auto;' : '')}
  font-size: 24px;
  color: ${props => (props.black ? '#000' : '#5a5a5a')};
`;

const PhotoRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 100%;
  ${props => (props.grid ? 'padding: 5% 0' : '')};
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  .responsive-image {
    object-fit: cover;
    padding: 0 5%;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`;

const GridRow = styled.div`
  width: 900px;
  ${props => (props.grid ? 'padding: 5% 0' : '')};
`;

const BrandRow = styled.div`
  height: ${props => (props.quarter ? '10%' : '30%')};
  width: ${props => (props.quarter ? '80vw' : '100vw')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BrandItem = styled.div`
  position: relative;
  width: ${props => (props.quarter ? '10%' : '30%')};
  .logo {
    position: absolute;
    left: 0;
    height: 50%;
    width: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .grey-logo {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .background {
    height: 100%;
    z-index: -1;
  }
`;

const FactRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 25%;
  justify-content: space-between;
`;

const Fact = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  .fact-index {
    font-size: 64px;
    color: white;
  }
  .fact-body {
    line-height: 32px;
    font-size: 24px;
    color: #000;
    padding-left: 10%;
  }
`;

export { ScrollColumn, BlackSlide, BigText, MedText, PhotoRow, GridRow, BrandRow, BrandItem, FactRow, Fact };
