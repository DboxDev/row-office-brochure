import styled from 'styled-components';
import { mediaMin } from 'styles/mediaQueries';

const ScrollColumn = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 100%;
  width: fit-content;
  padding-top: ${props => props.paddingTop || '120px'};
  padding-right: ${props => props.paddingRight || '80px'};
  padding-bottom: ${props => props.paddingTop || '80px'};
  padding-left: ${props => props.paddingLeft || '80px'};
  opacity: ${props => (props.revealed ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
  ${props => props.spaceBetween && 'justify-content: space-between;'}
`;

const BlackSlide = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #000;
  transform: ${props => (props.revealed ? 'traslateY(0)' : 'translateY(100%)')};
  transition: transform 1s ease-in-out;
  h1.quote {
    color: #fff;
    width: 50%;
    font-style: italic;
    font-size: 4vh;
    ${mediaMin.desktopLarge`
      font-size: 5vh;
    `}
  }
  span.credit {
    font-size: 32px;
    color: #fff;
    width: 50%;
  }
  span.scroll-reminder {
    position: absolute;
    right: 0;
    bottom: 8%;
    font-size: 1rem;
    display: inline-block;
    width: 40px;
    height: 1px;
    background: #fff;
    p {
      color: #fff;
      position: relative;
      bottom: 25px;
      right: 70px;
      letter-spacing: 2px;
    }
  }
`;

const BigText = styled.h2`
  color: ${props => (props.intro ? '#000' : '#999999')};
  font-weight: ${props => (props.intro ? '500' : '400')};
  margin: 0;
  font-size: 7vh;
  line-height: 100%;
  ${'' /* ${mediaMin.desktop`
    font-size: 7vh;
  `} */}
`;

const MedText = styled.h3`
  margin: 0;
  font-size: 3vh;
  color: ${props => (props.black ? '#000' : '#999999')};
  line-height: 4vh;
`;

const PhotoRow = styled.div`
  display: flex;
  flex-direction: row;
  height: ${props => props.height || '55%'};
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
  margin: 0 50px;
  .fact-index {
    color: #d8d8d8;
    font-family: 'SangBleu Kingdom', serif;
    width: 60px;
    font-size: 3rem;
  }
  .fact-body {
    color: #000;
    font-family: 'Apercu', 'sans-serif';
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1px;
    padding-top: 10px;
    width: 300px;
    ${mediaMin.desktop`
      font-size: 1.4rem;
      letter-spacing: 3px;
    `}
  }
`;

const Row = styled.div`
  height: ${props => props.height || '50%'};
  width: 100%;
  background: ${props => props.background || 'teal'};
  padding-top: 3vh;
`;

const CaptionText = styled.p`
  font-size: 1.4rem;
  color: #7f7f7f;
  letter-spacing: 1px;
`;

export {
  ScrollColumn,
  BlackSlide,
  BigText,
  MedText,
  PhotoRow,
  GridRow,
  BrandRow,
  BrandItem,
  FactRow,
  Fact,
  CaptionText,
  Row
};
