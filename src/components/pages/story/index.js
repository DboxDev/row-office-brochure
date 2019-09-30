/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import StoryDesktop from './StoryDesktop';
import StoryMobile from './StoryMobile';

const StoryContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  .flex-column-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .swiper-container {
    display: block;
    height: 100%;
    .swiper-wrapper {
      height: 100%;
      .swiper-slide {
        height: 100%;
      }
    }
  }
`;

function Story({ displayMobile }) {
  return <StoryContainer>{displayMobile ? <StoryMobile /> : <StoryDesktop />}</StoryContainer>;
}

export default Story;
