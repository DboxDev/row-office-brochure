import React from 'react';
import RotatingGrid from 'components/images/RotatingGrid';

import { welcomeGrid } from 'data/rotatingImages';

function Test() {
  return (
    <div>
      <RotatingGrid imgGrid={welcomeGrid} carouselActive />
    </div>
  );
}

export default Test;
