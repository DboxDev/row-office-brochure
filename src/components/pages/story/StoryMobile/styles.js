import styled from 'styled-components';

const BlackSlideMobile = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  h1.quote {
    color: #fff;
    width: 80%;
    font-style: italic;
    font-size: 6vw;
  }
  span.credit {
    font-size: 1.6vh;
    color: #fff;
    width: 80%;
  }
`;

const SlideMobile = styled.div`
  background-color: #fff;
  padding: 5em 10% 0;
  padding-top: ${props => props.paddingTop || '5em'};
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: ${props => props.paddingBottom || 0};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const BigText = styled.h2`
  margin: 0;
  font-size: 9vw;
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

const MedText = styled.h3`
  margin: 0;
  font-size: 2vh;
  color: #000;
  line-height: 140%;
`;

const Row = styled.div`
  width: 100%;
  padding-top: ${props => props.paddingTop || '4vh'};
  padding-bottom: ${props => props.paddingBottom || '4vh'};
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    .react-player__preview {
      .react-player__shadow {
        background: none !important;
        border-radius: 0 !important;
        height: 100px !important;
        width: 100px !important;
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

export { BlackSlideMobile, SlideMobile, BigText, MedText, Row, PlayerWrapper };
