import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AnimatedResponsiveImage from './AnimatedResponsiveImage';

const RotatingImagesContainer = styled.div`
  position: relative;
  height: 35vh;
  width: 35vh;
  &:nth-child(1) {
    margin-right: 2vh;
  }
  &:nth-child(2) {
    margin-left: 2vh;
  }
  &:nth-child(3) {
    margin-right: 2vh;
  }
  &:nth-child(4) {
    margin-left: 2vh;
  }
`;

function RotatingImages({ imgArray, activeImage, position }) {
  return (
    <RotatingImagesContainer>
      {imgArray.map((src, idx) => {
        return (
          <AnimatedResponsiveImage
            key={`${idx}-animated-grid-image`}
            srcPath={src}
            imgClass={activeImage === idx ? 'active' : ''}
            position={position}
          />
        );
      })}
    </RotatingImagesContainer>
  );
}

const RotatingGridContainer = styled.div`
  height: 100%;
  .rotating-image-row {
    display: flex;
    width: 100%;
    &:nth-child(1) {
      margin-bottom: 4vh;
    }
  }
`;

function RotatingGrid({ imgGrid }) {
  const [carouselActive] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const numOfImgs = imgGrid[0].length;

  useEffect(() => {
    function changeImage() {
      const nextImage = activeIndex === numOfImgs - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextImage);
    }

    let timeOut;
    if (carouselActive) {
      timeOut = setTimeout(() => changeImage(), 3000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  });

  function renderGrid(imgGrid) {
    let rows = [];
    let rowCounter = 0;
    let columns = [];

    imgGrid.forEach((cellArray, idx) => {
      columns.push(
        <RotatingImages
          key={`rotating-image-${idx}`}
          imgArray={cellArray}
          activeImage={activeIndex}
          position={idx}
        />
      );

      if ((idx + 1) % 2 === 0) {
        rows.push(
          <div className="rotating-image-row" key={`row_${rowCounter}`}>
            {columns}
          </div>
        );
        // Increment row counter
        rowCounter++;
        // Empty column array
        columns = [];
      }
    });

    return rows;
  }

  return (
    <RotatingGridContainer className="image-grid-container">
      {renderGrid(imgGrid)}
    </RotatingGridContainer>
  );
}

export default RotatingGrid;
