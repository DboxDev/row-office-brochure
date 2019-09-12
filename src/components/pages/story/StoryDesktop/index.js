import React, { useEffect, useState, useCallback } from 'react';
import Swiper from 'react-id-swiper';

import { SectionOneDesktop, SectionTwoDesktop, SectionThreeDesktop } from './sections/_module';

function StoryDesktop() {
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
  }, [swiperIndex, revealed]);

  return (
    <Swiper {...swiperSettings}>
      <SectionOneDesktop revealed={revealed} />
      <SectionTwoDesktop revealed={revealed} />
      <SectionThreeDesktop revealed={revealed} />
    </Swiper>
  );
}

export default StoryDesktop;
