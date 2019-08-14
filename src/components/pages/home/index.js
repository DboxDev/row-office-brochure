/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

import { SectionOne, SectionTwo, SectionThree } from 'components/pages/home/components/_module';

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
        <SectionOne revealed={revealed} />
        <SectionTwo revealed={revealed} />
        <SectionThree revealed={revealed} />
      </Swiper>
    </HorizontalContainer>
  );
};

export default Index;
