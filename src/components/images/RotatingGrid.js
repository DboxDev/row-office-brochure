import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Context from 'config/Context';

import RotatingImages from 'components/images/RotatingImages';

const RotatingGridContainer = styled.div`
  height: 100%;
  width: ${props => `${props.height}px` || '1000px'};
  .rotating-image-row {
    display: flex;
    width: 100%;
    height: 50%;
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

    if (carouselActive) {
      setTimeout(() => changeImage(), 5000);
    }
  });

  const context = useContext(Context);
  const { height } = context.state.windowDimensions;

  function renderGrid(imgGrid) {
    let rows = [];
    let rowCounter = 0;
    let columns = [];

    imgGrid.forEach((cellArray, idx) => {
      columns.push(
        <RotatingImages key={`rotating-image-${idx}`} imgArray={cellArray} activeImage={activeIndex} position={idx} />
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
    <RotatingGridContainer className="image-grid-container" height={height * 0.73}>
      {renderGrid(imgGrid)}
    </RotatingGridContainer>
  );
}

export default RotatingGrid;
