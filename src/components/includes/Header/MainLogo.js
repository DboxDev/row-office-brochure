import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainLogoWrapper = styled.svg`
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  path,
  polygon {
    transition: fill 300ms ease;
  }
`;

function MainLogo({ backgroundColor, navActive }) {
  const setColor = (activeColor, inactiveColor) => {
    if (backgroundColor === '#000') {
      return activeColor;
    }
    return navActive ? activeColor : inactiveColor;
  };

  return (
    <Link to={'/'}>
      <MainLogoWrapper xmlns="http://www.w3.org/2000/svg" width="250" viewBox="0 0 4600.01 575">
        <title>ROW DTLA Logo</title>
        <g id="ROW" fill={setColor('#FFF', '#000')}>
          <path d="M427.82,345.91c70.26-24.69,105.34-97.49,105.34-163.18C533.16,80.14,458.54.19,341.89.19H.51V258.91H.56L.51,359.15.56,482.92.51,574.8H137.4V361.44H285l.44,1L388.7,574.8H541.07Zm-37.47-120.2c-.9.64-1.77,1.31-2.73,1.91l-.09,0a64.9,64.9,0,0,1-11.84,5.69l-.18.06c-1.72.63-3.52,1.16-5.35,1.67-1.35.37-2.72.72-4.14,1l-1.38.3a108.44,108.44,0,0,1-14.26,1.78l-1.06,0c-1.8.09-3.66.13-5.54.16H138.07V124.31H341.89c68.71,0,68.71,40.88,68.71,54.32C410.6,200.09,403.78,215.78,390.35,225.71Z" />
          <path d="M901.85.12C740,.12,608.31,126.26,608.31,281.33a306.83,306.83,0,0,0,6.32,62c24,116,114.26,204.77,230.94,226.42a304.72,304.72,0,0,0,55.59,5.13c161.87,0,293.55-128,293.55-285.34,0-78.44-30.54-151.56-86-205.9C1053.68,29.77,980.22.12,901.85.12Zm103.95,410c-28.12,22.17-64.2,35.34-104,35.34-91.16,0-165.32-69.73-165.32-155.47,0-41.62,13.93-78.11,37.86-105.74,29.48-34.07,74.16-54.64,126.84-54.64,92.36,0,164.71,68.55,164.71,156.06A157.16,157.16,0,0,1,1005.8,410.08Z" />
          <polygon points="1848 0.12 1788.32 197.87 1757.2 300.95 1672.12 0.29 1614.16 0.29 1556.21 0.29 1471.12 300.95 1440 197.87 1380.33 0.12 1238.42 0.12 1410.24 574.88 1533.64 574.88 1580.19 410.29 1614.16 293.23 1648.13 410.29 1694.68 574.88 1818.08 574.88 1989.91 0.12 1848 0.12" />
        </g>
        <g id="DTLA" fill={setColor('#262626', '#d9d9d9')}>
          <path d="M4341.9.26H4222.29L3960.84,574.88h143.38l60.18-131.65h230.68l58.21,131.65h146.2Zm-117.38,310.6,56.14-123.36,55.21,123.36Z" />
          <path d="M2388,.31H2109.73V574.84H2390c79.56,0,135.14-23.23,185.8-77.58,53.1-56.17,84.82-135.34,84.82-211.75C2660.64,125.55,2540.86.31,2388,.31Zm107.11,391.88h0l-.15.18a137,137,0,0,1-22.46,22.5c-2.58,2-5.22,4-7.94,5.82l-1.17.76a130.75,130.75,0,0,1-25.8,13.2c-1.11.42-2.19.89-3.31,1.28-2.15.75-4.36,1.38-6.55,2-2,.58-4,1.14-6.06,1.63-1.9.46-3.82.87-5.76,1.25-2.61.5-5.25.9-7.92,1.25-1.56.21-3.11.45-4.7.6-4.34.42-8.74.69-13.22.69H2239.8V131.78h148.86c96,0,139.77,82.58,139.77,159.29C2528.43,330.64,2516,365.67,2495.07,392.19Z" />
          <polygon points="2752.45 131.79 2937.49 131.79 2937.49 261.18 2937.49 574.88 3066.89 574.88 3066.89 131.79 3118.34 131.79 3249.84 131.79 3249.84 0.26 2752.45 0.26 2752.45 131.79" />
          <polygon points="3523.23 0.26 3391.7 0.26 3391.7 131.77 3391.7 574.88 3391.75 574.88 3707.51 574.88 3839.03 574.88 3839.03 443.39 3523.23 443.39 3523.23 0.26" />
        </g>
      </MainLogoWrapper>
    </Link>
  );
}

export default MainLogo;
