import React, { useState } from 'react';
import styled from 'styled-components';

import ResponsiveImage from 'components/images/ResponsiveImage';

const MapNavigation = styled.nav`
  width: 100%;
  button {
    background: none;
    border: 0;
    padding: 0.5em 0;
    margin-right: 1em;
    cursor: pointer;
    font-size: 2vh;
    &.active {
      border-bottom: 3px solid #000;
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .row-container {
    display: flex;
    position: absolute;
    width: 100%;
    margin: 0 auto;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease;
    height: 100%;
    &.active {
      opacity: 1;
      visibility: visible;
    }
    img {
      height: 100%;
      margin: 0 auto;
    }
  }
  .dtla-container {
    display: flex;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease;
    flex-direction: column;
    overflow: hidden;
    &.active {
      opacity: 1;
      visibility: visible;
      overflow: initial;
    }
  }
`;

function Maps() {
  const [activeMap, toggleMap] = useState('row');

  return (
    <div className="full-height-container">
      <MapNavigation>
        <button className={activeMap === 'row' ? 'active' : null} onClick={() => toggleMap('row')}>
          ROW
        </button>
        <button
          className={activeMap === 'dtla' ? 'active' : null}
          onClick={() => toggleMap('dtla')}
        >
          DTLA
        </button>
      </MapNavigation>
      <MapContainer>
        <div className={`row-container ${activeMap === 'row' ? 'active' : null}`}>
          <img className="center" src="/images/pages/maps/row.png" alt="Row primary map" />
        </div>
        <div className={`dtla-container ${activeMap === 'dtla' ? 'active' : null}`}>
          <ResponsiveImage
            srcPath="/images/pages/maps/dtla_map1"
            imgAlt="DLTA map #1"
            noMaxHeight
          />
          <ResponsiveImage
            srcPath="/images/pages/maps/dtla_map2"
            imgAlt="DLTA map #1"
            noMaxHeight
          />
          <ResponsiveImage
            srcPath="/images/pages/maps/dtla_map3"
            imgAlt="DLTA map #1"
            noMaxHeight
          />
          <ResponsiveImage
            srcPath="/images/pages/maps/dtla_map4"
            imgAlt="DLTA map #1"
            noMaxHeight
          />
        </div>
      </MapContainer>
    </div>
  );
}

export default Maps;
