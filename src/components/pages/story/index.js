/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Helmet } from "react-helmet";
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
  return (
    <StoryContainer>
      <Helmet>
        <title>Creative Office Space Downtown Los Angeles, CA | ROW DTLA</title>
        <meta name="keywords" content="office space downtown los angeles office space for lease downtown los angeles creative office space downtown los angeles" />
        <meta name="description" content="Creative Office Space for Lease at ROW DTLA. Contemporary offices, creative community and authentic experiences that fosters collaboration for any team." />
      </Helmet>
      {displayMobile ? <StoryMobile /> : <StoryDesktop />}
    </StoryContainer>
  );
}

export default Story;
