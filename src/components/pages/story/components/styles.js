import styled from 'styled-components';

const ScrollColumn = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 100%;
  width: fit-content;
  padding-top: ${props => props.paddingTop || '120px'};
  padding-right: ${props => props.paddingRight || '80px'};
  padding-bottom: ${props => props.paddingBottom || '80px'};
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
    font-size: 2vh;
    color: #fff;
    width: 45%;
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
  margin: 0;
  font-size: 6vh;
  line-height: 110%;
  &.black-500 {
    font-weight: 500;
    color: #000;
  }
  &.grey-400 {
    font-weight: 400;
    color: #8e8e8e;
  }
  &.grey-500 {
    font-weight: 500;
    color: #8e8e8e;
  }
`;

const BrandRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30%;
`;

const BrandItem = styled.a`
  position: relative;
  max-width: 400px;
  margin: 0 5vw;
  height: 100%;
  display: flex;
  align-items: center;
  .logo {
    position: absolute;
    left: 0;
    height: 40%;
    width: 50%;
    top: 50%;
    transform: translate(-65%, -50%);
  }
  .background {
    z-index: -1;
    opacity: 0.8;
  }
`;

const PressRow = styled.div`
  display: flex;
  align-items: center;
`;

const PressItem = styled.a`
  width: 30%;
  max-height: 100%;
  margin: 0 5vw;
  .press-logo {
    max-height: 100%;
    max-width: 16vh;
  }
`;

const FactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Fact = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 50px;
  .fact-index {
    margin: 0;
    color: #8e8e8e;
    font-family: 'SangBleu Kingdom', serif;
    width: 70px;
    font-size: 2.6vh;
  }
  .fact-body {
    margin: 0;
    color: #000;
    font-family: 'Apercu', 'sans-serif';
    text-transform: uppercase;
    font-size: 1.6vh;
    letter-spacing: 1px;
    width: 250px;
  }
`;

const GridRow = styled.div`
  width: 900px;
  ${props => (props.grid ? 'padding: 5% 0' : '')};
`;

const MedText = styled.h3`
  margin: 0;
  font-size: 2vh;
  color: #000;
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

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  min-width: 130vh;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    .react-player__preview {
      .react-player__shadow {
        background: none !important;
        border-radius: 0 !important;
        height: 200px !important;
        width: 200px !important;
        .react-player__play-icon {
          border-style: none !important;
          border-width: 0 !important;
          margin-left: 0 !important;
          background-image: url('/video/player/videoplay_icon.svg');
          height: 100%;
          width: 100%;
        }
      }
    }
  }
`;

const Row = styled.div`
  height: ${props => props.height || '50%'};
  width: 100%;
  padding-top: 4vh;
`;

export {
  BrandRow,
  BrandItem,
  PressRow,
  PressItem,
  BlackSlide,
  BigText,
  FactRow,
  Fact,
  GridRow,
  PhotoRow,
  PhotoGridRow,
  PlayerWrapper,
  MedText,
  Row,
  ScrollColumn
};
