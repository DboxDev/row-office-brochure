import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  25% { 
    transform: translateX(42px) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(42px) translateY(42px) rotate(-179deg);
  } 50.1% { 
    transform: translateX(42px) translateY(42px) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
  }
`;

const LoadingDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: black;
  z-index: 999;
  display: flex;
  align-items: center;
  opacity: ${props => (props.isLoading ? 1 : 0)};
  visibility: ${props => (props.isLoading ? 'visible' : 'hidden')};
  transition: all 300ms ease;

  .loader {
    margin: 100px auto;
    width: 40px;
    height: 40px;
    position: relative;
    .cube1,
    .cube2 {
      background-color: #fff;
      width: 15px;
      height: 15px;
      position: absolute;
      top: 0;
      left: 0;

      animation: ${spinAnimation} 1.8s infinite ease-in-out;
    }
    .cube2 {
      animation-delay: -0.9s;
    }
  }
`;

const VideoIntroContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  opacity: ${props => (props.isVideoActive ? 1 : 0)};
  visibility: ${props => (props.isVideoActive ? 'visible' : 'hidden')};
  transition: all 500ms ease;
  cursor: pointer;
  video {
    width: 100%;
    object-fit: cover;
    height: 100%;
    object-position: 50% 40%;
  }
`;

const VideoIntro = () => {
  const introVideo = useRef(null);
  const [isLoading, toggleLoading] = useState(true);
  const [isVideoActive, toggleVideoActive] = useState(true);

  useEffect(() => {
    const videoStartedCallback = () => {
      toggleLoading(false);
    };

    const videoEndedCallback = () => {
      toggleVideoActive(false);
    };

    introVideo.current.addEventListener('play', videoStartedCallback);
    introVideo.current.addEventListener('ended', videoEndedCallback);
  }, []);

  return (
    <>
      <LoadingDiv isLoading={isLoading}>
        <div className="loader">
          <div className="cube1"></div>
          <div className="cube2"></div>
        </div>
      </LoadingDiv>
      <VideoIntroContainer isVideoActive={isVideoActive} onClick={() => toggleVideoActive(false)}>
        <video muted autoPlay="autoplay" ref={introVideo}>
          <source src="/video/intro/row_dtla_intro2.mp4" type="video/mp4" />
        </video>
      </VideoIntroContainer>
    </>
  );
};

export default VideoIntro;
