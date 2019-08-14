import React, { useState } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .left-column {
    width: 20%;
    .button-container {
      button {
        display: block;
        padding: 0.2em 0;
        text-align: left;
        font-size: 2em;
        background: none;
        border: none;
        margin-bottom: 1em;
        cursor: pointer;
        border-bottom: 2px solid rgba(0, 0, 0, 0);
        &.active {
          border-bottom: 2px solid rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  .right-column {
    width: 80%;
    height: 100%;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      max-height: 100%;
      opacity: 0;
      transition: opacity 200ms ease;
      &.active {
        opacity: 1;
      }
    }
  }
`;

function Maps() {
  const [activeMap, toggleMap] = useState('row');

  return (
    <div className="container">
      <MapContainer>
        <div className="left-column">
          <h1 className="page-title">Maps</h1>
          <div className="button-container">
            <button className={activeMap === 'row' ? 'active' : null} onClick={() => toggleMap('row')}>
              ROW
            </button>
            <button className={activeMap === 'dtla' ? 'active' : null} onClick={() => toggleMap('dtla')}>
              DTLA
            </button>
          </div>
        </div>
        <div className="right-column">
          <img
            className={activeMap === 'row' ? 'active' : null}
            src="/images/pages/maps/row_map.jpg"
            alt="Row primary map"
          />
          <img
            className={activeMap === 'dtla' ? 'active' : null}
            src="/images/pages/maps/row_map.jpg"
            alt="Row secondary map"
          />
        </div>
      </MapContainer>
    </div>
  );
}

export default Maps;
