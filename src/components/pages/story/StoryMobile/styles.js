import styled from 'styled-components';

const BlackSlideMobile = styled.div`
  background-color: #000;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  h1.quote {
    color: #fff;
    width: 80%;
    font-style: italic;
    font-size: 24px;
  }
  span.credit {
    font-size: 1.6vh;
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

const SlideMobile = styled.div``;

// const PlayerWrapper = styled.div`
//   position: relative;
//   padding-top: 56.25%;
//   min-width: 130vh;
//   .react-player {
//     position: absolute;
//     top: 0;
//     left: 0;
//     .react-player__preview {
//       .react-player__shadow {
//         background: none !important;
//         border-radius: 0 !important;
//         height: 200px !important;
//         width: 200px !important;
//         .react-player__play-icon {
//           border-style: none !important;
//           border-width: 0 !important;
//           margin-left: 0 !important;
//           background-image: url('/video/player/videoplay_icon.svg');
//           height: 100%;
//           width: 100%;
//         }
//       }
//     }
//   }
// `;

export { BlackSlideMobile, SlideMobile };
