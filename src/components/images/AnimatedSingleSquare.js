import React, { useState, useEffect, createRef } from 'react';
import AnimatedResponsiveImageMobile from './AnimatedResponsiveImageMobile';
import styled from 'styled-components';

const AnimatedSingleSquareContainer = styled.div`
  position: relative;
  height: ${props => `${props.height}px` || 0};
`;

function AnimatedSingleSquare({ imgArray, active }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const numOfImgs = imgArray.length;
  const ref = createRef();

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

  useEffect(() => {
    setTimeout(() => {
      if (ref.current !== null) {
        const refHeight = ref.current.clientHeight;
        setDivHeight(refHeight);
      }
    }, 500);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      const refHeight = ref.current.clientHeight;
      setDivHeight(refHeight);
    };

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [ref]);

  function renderGrid(imgArray) {
    return imgArray.map((src, index) => {
      if (index === 0) {
        return (
          <AnimatedResponsiveImageMobile
            key={`animated-individual-image-${index}`}
            srcPath={src}
            imgClass={index === activeIndex && 'active'}
            refProp={ref}
          />
        );
      } else {
        return (
          <AnimatedResponsiveImageMobile
            key={`animated-individual-image-${index}`}
            srcPath={src}
            imgClass={index === activeIndex && 'active'}
          />
        );
      }
    });
  }

  return (
    <AnimatedSingleSquareContainer height={divHeight}>
      {renderGrid(imgArray)}
    </AnimatedSingleSquareContainer>
  );
}

export default AnimatedSingleSquare;
