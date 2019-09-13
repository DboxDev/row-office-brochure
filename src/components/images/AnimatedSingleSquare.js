import React, { useState, useEffect } from 'react';
import AnimatedResponsiveImageMobile from './AnimatedResponsiveImageMobile';
import styled from 'styled-components';

const AnimatedSingleSquareContainer = styled.div`
  position: relative;
`;

function AnimatedSingleSquare({ imgArray, active }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const numOfImgs = imgArray.length;

  useEffect(() => {
    function changeImage() {
      const nextImage = activeIndex === numOfImgs - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextImage);
    }

    let timeOut;
    if (active) {
      timeOut = setTimeout(() => changeImage(), 3000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  });

  function renderGrid(imgArray) {
    return imgArray.map((src, index) => (
      <AnimatedResponsiveImageMobile
        key={`animated-individual-image-${index}`}
        srcPath={src}
        imgClass={index === activeIndex && 'active'}
      />
    ));
  }

  return <AnimatedSingleSquareContainer>{renderGrid(imgArray)}</AnimatedSingleSquareContainer>;
}

export default AnimatedSingleSquare;
