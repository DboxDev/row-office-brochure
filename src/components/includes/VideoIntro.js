import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

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
  const [isVideoActive, toggleVideoActive] = useState(true);

  useEffect(() => {
    const videoEndedCallback = () => {
      toggleVideoActive(false);
    };

    introVideo.current.addEventListener('ended', videoEndedCallback);
  }, []);

  return (
    <VideoIntroContainer isVideoActive={isVideoActive} onClick={() => toggleVideoActive(false)}>
      <video muted autoPlay="autoplay" ref={introVideo}>
        <source src="/video/intro/row_dtla_intro2.mp4" type="video/mp4" />
      </video>
    </VideoIntroContainer>
  );
};

export default VideoIntro;
