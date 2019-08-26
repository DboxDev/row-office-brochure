/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

import { SectionOne, SectionTwo, SectionThree } from 'components/pages/story/components/_module';

const HorizontalContainer = styled.div`
  height: 100%;
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

const Story = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [revealed, setRevealed] = useState(0);

  const swiperSettings = {
    freeMode: true,
    mousewheel: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    getSwiper: setSwiper
  };

  const updateIndex = useCallback(() => {
    const slideIndex = swiper.realIndex;
    setSwiperIndex(slideIndex);
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

export default Story;
