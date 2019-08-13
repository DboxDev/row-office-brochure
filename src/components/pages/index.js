/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

import { mediaMin } from '../../styles/MediaQueries';
import ResponsiveImage from '../utils/responsive-image';

const HorizontalContainer = styled.div`
  height: 100vh;
  .swiper-container {
    display: block;
    height: 100vh;
    .swiper-wrapper {
      height: 100%;
      .swiper-slide {
        height: 100%;
      }
    }
  }
`;

const ScrollColumn = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 100%;
  width: fit-content;
  max-height: 100vh;
  box-sizing: border-box;
  padding: 10%;
`;

const BlackSlide = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background-color: #000;
  p.quote {
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
  margin: 5% 0 0 0;
  font-size: 55px;
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

const Index = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiperIndex, setSwiperIndex] = useState(2);
  const [revealed, setRevealed] = useState(2);

  const swiperSettings = {
    freeMode: true,
    mousewheel: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    getSwiper: setSwiper
  };

  const updateIndex = useCallback(() => {
    setSwiperIndex(swiper.realIndex + 1);
  }, [swiper]);

  useEffect(() => {
    if (swiper !== null) {
      swiper.on('slideChange', updateIndex);
    }

    return () => {
      if (swiper !== null) {
        swiper.off('slideChange', updateIndex);
      }
    };
  }, [swiper, updateIndex]);

  useEffect(() => {
    if (swiperIndex > revealed) {
      setRevealed(swiperIndex);
    }
  }, [swiperIndex]);

  return (
    <HorizontalContainer>
      <Swiper {...swiperSettings}>
        <BlackSlide>
          <p className="quote">
            ROW DTLA has shown Los Angeles what happens when you redefine the
            concept of workplace, that if you celebrate innovation,
            collaboration and community, you get something very special, that
            just keeps getting better.
          </p>
          <span className="scroll-reminder">SCROLL</span>
        </BlackSlide>
        <ScrollColumn>
          <PhotoRow>
            <ResponsiveImage srcPath="/images/home/row_1" imgAlt="test" />
          </PhotoRow>
          <BigText black>
            Welcome to
            <br />
            ROW DTLA
          </BigText>
        </ScrollColumn>
        <ScrollColumn>
          <PhotoRow>
            <ResponsiveImage srcPath="/images/home/row_2" imgAlt="test" />
            <ResponsiveImage srcPath="/images/home/row_3" imgAlt="test" />
          </PhotoRow>
          <BigText>
            100 years of history and
            <br />
            32 acres of space mark the
            <br /> beginning of LA’s future as
            <br />a creative and cultural hub
          </BigText>
        </ScrollColumn>
        <ScrollColumn>
          <PhotoRow grid>
            <ResponsiveImage srcPath="/images/home/row_4" imgAlt="test" />
            <ResponsiveImage srcPath="/images/home/row_5" imgAlt="test" />
          </PhotoRow>
          <PhotoRow grid>
            <ResponsiveImage srcPath="/images/home/row_6" imgAlt="test" />
            <ResponsiveImage srcPath="/images/home/row_7" imgAlt="test" />
          </PhotoRow>
        </ScrollColumn>
      </Swiper>
    </HorizontalContainer>
  );
};

export default Index;
