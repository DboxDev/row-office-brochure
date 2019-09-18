import React from 'react';
import styled from 'styled-components';

import { mediaMin } from 'styles/mediaQueries';

const ScreenRestrictionContainer = styled.div`
  color: #fff;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  img {
    height: 80px;
    width: 80px;
    margin: 40px 0;
  }
  h1 {
    width: 80%;
    text-align: center;
    font-size: 20px;
    ${mediaMin.tablet`
      width: 50%;
    `}
  }
`;

function ScreenRestriction() {
  return (
    <ScreenRestrictionContainer>
      <img src="/images/icons/rotate.svg" alt="Rotate Icon" />
      <h1>The presentation is best experienced horizontally and on a tablet or larger device</h1>
    </ScreenRestrictionContainer>
  );
}

export default ScreenRestriction;
