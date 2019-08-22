import styled from 'styled-components';

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
    width: 45%;
    font-style: italic;
    font-size: 3.4vh;
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
  color: ${props => (props.intro ? '#000' : '#8E8E8E')};
  font-weight: ${props => (props.intro ? '500' : '400')};
  margin: 0;
  font-size: 6vh;
  line-height: 110%;
`;

const MedText = styled.h3`
  margin: 0;
  font-size: 2vh;
  color: ${props => (props.black ? '#000' : '#747474')};
  line-height: 140%;
`;

const PhotoRow = styled.div`
  display: flex;
  flex-direction: row;
  height: ${props => props.height || '55%'};
  width: 100%;
  .responsive-image {
    object-fit: cover;
    &:nth-child(2) {
      margin-left: 50px;
    }
  }
`;

const PhotoGridRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  img {
    padding: 20px;
  }
`;

const GridRow = styled.div`
  width: 900px;
  ${props => (props.grid ? 'padding: 5% 0' : '')};
`;

const BrandRow = styled.div`
  height: ${props => (props.quarter ? '10%' : '30%')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BrandItem = styled.div`
  position: relative;
  max-width: 350px;
  margin: 0 5vw;
  .logo {
    position: absolute;
    left: 0;
    height: 40%;
    width: 50%;
    top: 50%;
    transform: translate(-65%, -50%);
  }
  .background {
    height: 100%;
    z-index: -1;
  }
  .grey-logo {
    height: 100%;
    width: 100%;
    object-fit: contain;
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
    font-size: 4vh;
  }
  .fact-body {
    color: #000;
    font-family: 'Apercu', 'sans-serif';
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding-top: 10px;
    width: 250px;
    letter-spacing: 1px;
  }
`;

const Row = styled.div`
  height: ${props => props.height || '50%'};
  width: 100%;
  padding-top: 4vh;
`;

const CaptionText = styled.p`
  font-size: 1.2rem;
  color: #7f7f7f;
  letter-spacing: 1px;
`;

export {
  ScrollColumn,
  BlackSlide,
  BigText,
  MedText,
  PhotoRow,
  PhotoGridRow,
  GridRow,
  BrandRow,
  BrandItem,
  FactRow,
  Fact,
  CaptionText,
  Row
};
