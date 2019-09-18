import React from 'react';
import styled from 'styled-components';

const ResponsiveImg = styled.img`
  max-width: 100%;
  max-height: ${props => (props.noMaxHeight ? 'none' : '100%')};
  ${props => props.height && `height: ${props.height};`};
  ${props => props.width && `width: ${props.width};`}
`;

function ResponsiveImageMobile({
  ariaHidden,
  srcPath,
  imgClass,
  imgAlt,
  onClickProp,
  refProp,
  height,
  noMaxHeight,
  width
}) {
  return (
    <ResponsiveImg
      src={`${srcPath}_1100.jpg`}
      srcSet={`${srcPath}_400.jpg 400w, ${srcPath}_600.jpg 600w, ${srcPath}_800.jpg 800w, ${srcPath}_1100.jpg 1100w`}
      alt={imgAlt}
      ref={refProp || null}
      className={`responsive-image ${imgClass}`}
      onClick={onClickProp}
      aria-hidden={ariaHidden === undefined ? false : ariaHidden}
      height={height}
      width={width}
      noMaxHeight={noMaxHeight}
    />
  );
}

export default ResponsiveImageMobile;
