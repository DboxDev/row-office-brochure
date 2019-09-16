import React from 'react';
import styled from 'styled-components';

import { mediaMax } from 'styles/mediaQueries';
import { uppercaseFirstLetter } from 'helpers/strings';

const RouteTitleContainer = styled.h3`
  position: fixed;
  left: 5%;
  top: ${props => (props.displayMobile ? '42px' : '60px')};
  transform: translateY(-50%);
  margin: 0;
  color: #fff;
  font-size: ${props => (props.displayMobile ? '1.4rem' : '2rem')};
  color: ${props => props.color};
  z-index: 1;
  ${mediaMax.phoneXL`
    display: none;
  `}
`;

function RouteTitle({ route, color, displayMobile }) {
  return (
    <RouteTitleContainer color={color} displayMobile={displayMobile}>
      {uppercaseFirstLetter(route)}
    </RouteTitleContainer>
  );
}

export default RouteTitle;
