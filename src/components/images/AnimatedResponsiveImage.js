import React from 'react';
import styled from 'styled-components';

const AnimatedResponsiveImageWrapper = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  max-width: 100%;
  transition: opacity 500ms ease;
  &.active {
    opacity: 1;
  }
`;

function AnimatedResponsiveImage({ ariaHidden, srcPath, imgClass, imgAlt, onClickProp, refProp }) {
  return (
    <AnimatedResponsiveImageWrapper
      src={`${srcPath}.jpg`}
      srcSet={`${srcPath}_400.jpg 400w, ${srcPath}_600.jpg 600w, ${srcPath}_800.jpg 800w, ${srcPath}_1100.jpg 1100w, ${srcPath}_1500.jpg 1500w, ${srcPath}_2000.jpg 2000w, ${srcPath}_2500.jpg 2500w`}
      alt={imgAlt}
      ref={refProp || null}
      className={`animated-responsive-image ${imgClass}`}
      onClick={onClickProp}
      aria-hidden={ariaHidden === undefined ? false : ariaHidden}
    />
  );
}

export default AnimatedResponsiveImage;
