import React from 'react';
import styled from 'styled-components';

const HamburgerContainer = styled.button`
  background: transparent;
  position: fixed;
  cursor: pointer;
  right: 100px;
  top: 22px;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  border: 0;
  g {
    transition: fill 300ms ease;
  }
`;

function Hamburger({ backgroundColor, navActive, toggleActive, darkColorScheme }) {
  const setColor = (activeColor, inactiveColor) => {
    if (backgroundColor === '#000') {
      return activeColor;
    }
    return navActive || darkColorScheme ? activeColor : inactiveColor;
  };

  return (
    <HamburgerContainer navActive={navActive} onClick={() => toggleActive(!navActive)}>
      <svg
        id="hamburger"
        width="35px"
        viewBox="0 0 24 18"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
      >
        <title>Hamburger</title>
        <g
          id="line-container"
          stroke="none"
          strokeWidth="1"
          fill={setColor('#FFF', '#000')}
          fillRule="evenodd"
        >
          <polygon id="line-1" points="0 0 24 0 23 2 0 2" />
          <polygon id="line-2" points="0 8 21 8 20 10 0 10" />
          <polygon id="line-3" points="0 16 18 16 17 18 0 18" />
        </g>
      </svg>
    </HamburgerContainer>
  );
}

export default Hamburger;
