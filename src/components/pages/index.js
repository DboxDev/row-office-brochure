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
  opacity: ${props => (props.revealed ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
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
  transform: ${props => (props.revealed ? 'traslateY(0)' : 'translateY(100%)')};
  transition: transform 1s ease-in-out;
  p.quote {
    font-size: 32px;
    color: #fff;
    width: 50%;
  }
  span.credit {
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

const MedText = styled.h3`
  ${props => (props['margin-top'] ? 'margin-top: auto;' : '')}
  font-size: 24px;
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
    console.log(swiper.realIndex);
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
        <BlackSlide revealed>
          <p className="quote">
            ROW DTLA has shown Los Angeles what happens when you redefine the
            concept of workplace, that if you celebrate innovation,
            collaboration and community, you get something very special, that
            just keeps getting better.
          </p>
          <span className="scroll-reminder">SCROLL</span>
        </BlackSlide>
        <ScrollColumn revealed={revealed >= 1}>
          <PhotoRow>
            <ResponsiveImage srcPath="/images/home/row_1" imgAlt="test" />
          </PhotoRow>
          <BigText black>
            Welcome to
            <br />
            ROW DTLA
          </BigText>
        </ScrollColumn>
        <ScrollColumn revealed={revealed >= 2}>
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
        <ScrollColumn revealed={revealed >= 3}>
          <MedText margin-top>
            Contemporary offices, bespoke
            <br /> boutiques, and artisanal eateries
            <br />
            catered to the entrepreneurial
            <br /> visionaries, style icons, and food
            <br />
            connoisseurs of Los Angeles
          </MedText>
        </ScrollColumn>
        <ScrollColumn revealed={revealed >= 4}>
          <PhotoRow grid>
            <ResponsiveImage srcPath="/images/home/row_4" imgAlt="test" />
            <ResponsiveImage srcPath="/images/home/row_5" imgAlt="test" />
          </PhotoRow>
          <PhotoRow grid>
            <ResponsiveImage srcPath="/images/home/row_6" imgAlt="test" />
            <ResponsiveImage srcPath="/images/home/row_7" imgAlt="test" />
          </PhotoRow>
        </ScrollColumn>
        <ScrollColumn revealed={revealed >= 5}>
          <ResponsiveImage srcPath="/images/home/row_1" imgAlt="test" />
        </ScrollColumn>
        <ScrollColumn revealed={revealed >= 6}>
          <PhotoRow>
            <ResponsiveImage srcPath="/images/home/row_8" imgAlt="test" />
          </PhotoRow>
          <MedText margin-top>
            Authentic experiences in a district
            <br /> charged with innovation, collaboration
            <br /> and community. Curated down to
            <br /> every last detail, ROW DTLA's ever-
            <br />
            changing environment fosters
            <br /> creativity in every aspect
          </MedText>
        </ScrollColumn>
        <BlackSlide revealed={revealed >= 7}>
          <p className="quote">
            "In Downtown Los Angeles, ROW DTLA has continued to take shape,
            transforming 32 acres into an all-encompassing iconic destination.
            It is a growing collective of globally recognized shops, restaurants
            and innovative offices that are spread over six buildings to create
            their own unique L.A. environment."
          </p>
          <span className="credit">LA MAGAZINE</span>
        </BlackSlide>
      </Swiper>
    </HorizontalContainer>
  );
};

export default Index;
