import React from 'react';
import styled from 'styled-components';

const ResponsiveImg = styled.img`
  max-width: 100%;
  max-height: ${props => (props.noMaxHeight ? 'none' : '100%')};
  ${props => props.height && `height: ${props.height};`};
  ${props => props.width && `width: ${props.width};`}
`;

function ResponsiveImage({
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
      src={`${srcPath}.jpg`}
      srcSet={`${srcPath}_400.jpg 400w, ${srcPath}_600.jpg 600w, ${srcPath}_800.jpg 800w, ${srcPath}_1100.jpg 1100w, ${srcPath}_1500.jpg 1500w, ${srcPath}_2000.jpg 2000w, ${srcPath}_2500.jpg 2500w`}
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

export default ResponsiveImage;
