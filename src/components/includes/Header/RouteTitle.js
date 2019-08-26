import React from 'react';
import styled from 'styled-components';

import { uppercaseFirstLetter } from 'helpers/strings';

const RouteTitleContainer = styled.h3`
  position: fixed;
  left: 5%;
  top: 60px;
  transform: translateY(-50%);
  margin: 0;
  color: #fff;
  font-size: 2.4rem;
  color: ${props => props.color};
  z-index: 1;
`;

function RouteTitle({ route, color }) {
  return <RouteTitleContainer color={color}>{uppercaseFirstLetter(route)}</RouteTitleContainer>;
}

export default RouteTitle;
