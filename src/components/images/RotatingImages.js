import React from 'react';
import styled from 'styled-components';

const RotatingImagesContainer = styled.div`
  position: relative;
  width: 50%;
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

export default RotatingImages;

const AnimatedResponsiveImageWrapper = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  max-width: 100%;
  transition: opacity 500ms ease;
  padding: ${props => props.padding};
  height: 100%;
  &.active {
    opacity: 1;
  }
`;

function AnimatedResponsiveImage({ ariaHidden, srcPath, imgClass, imgAlt, onClickProp, refProp, position }) {
  let padding;
  switch (position) {
    case 0:
      padding = '0 40px 40px 0';
      break;
    case 1:
      padding = '0 0 40px 0';
      break;
    case 2:
      padding = '40px 40px 0 0';
      break;
    case 3:
      padding = '40px 0 0 0';
      break;
    default:
      break;
  }

  return (
    <AnimatedResponsiveImageWrapper
      src={`${srcPath}.jpg`}
      srcSet={`${srcPath}_400.jpg 400w, ${srcPath}_600.jpg 600w, ${srcPath}_800.jpg 800w, ${srcPath}_1100.jpg 1100w, ${srcPath}_1500.jpg 1500w, ${srcPath}_2000.jpg 2000w, ${srcPath}_2500.jpg 2500w`}
      alt={imgAlt}
      ref={refProp || null}
      className={`animated-responsive-image ${imgClass}`}
      onClick={onClickProp}
      aria-hidden={ariaHidden === undefined ? false : ariaHidden}
      padding={padding}
    />
  );
}
