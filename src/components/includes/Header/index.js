import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from 'data/routes';

import { BackgroundStyles } from 'styles/global/_module';
import MainLogo from './MainLogo';
import Hamburger from './Hamburger';
import RouteTitle from './RouteTitle';

const NavigationBar = styled.div`
  width: 100%;
  height: ${props => (props.displayMobile ? '80px' : '120px')};
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.background};
  z-index: 1;
`;

const NavigationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: black;
  transition: all 300ms ease;
  opacity: ${props => (props.navActive ? 1 : 0)};
  visibility: ${props => (props.navActive ? 'visible' : 'hidden')};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  ul {
    color: #fff;
    padding: 0;
    margin: 0;
    li {
      list-style-type: none;
      text-align: center;
      font-size: 4vh;
      margin: 0.8em 0;
      font-family: 'SangBleu Kingdom', serif;
      font-weight: normal;
      font-style: normal;
      color: #fff;
      transition: ${props => (props.navActive ? 'all 500ms ease' : 'all 0ms ease')};
      opacity: 0;
      transform: ${props => (!props.navActive ? 'translateX(-80px)' : 'translateX(0)')};
      opacity: ${props => (props.navActive ? 1 : 0)};
      &:nth-child(1) {
      }
      &:nth-child(2) {
        transition-delay: 50ms;
      }
      &:nth-child(3) {
        transition-delay: 100ms;
      }
      &:nth-child(4) {
        transition-delay: 150ms;
      }
      &:nth-child(5) {
        transition-delay: 200ms;
      }
      a {
        text-decoration: none;
        &:link,
        &:active,
        &:focus,
        &:visited {
          color: #fff;
        }
      }
    }
  }
`;

const colorMap = {
  home: {
    background: '#FFF'
  },
  availability: {
    background: '#000',
    color: '#FFF'
  },
  facts: {
    background: '#000',
    color: '#FFF'
  },
  maps: {
    background: '#fff',
    color: '#000'
  },
  contact: {
    background: '#000',
    color: '#fff'
  },
  test: {
    background: '#000',
    color: '#fff'
  }
};

const approvedRouteTitles = ['facts', 'maps', 'availability', 'contact'];

function Header({ location, displayMobile }) {
  let route = location.pathname.replace('/', '').toLowerCase() || 'home';

  const { background, color } = colorMap[route];
  const [navActive, toggleActive] = useState(false);

  const closeMenu = e => {
    if (e.keyCode === 27) {
      toggleActive(false);
    }
  };

  useEffect(() => {
    if (navActive) {
      window.addEventListener('keydown', closeMenu);
    }

    return () => {
      window.removeEventListener('keydown', closeMenu);
    };
  }, [navActive]);

  return (
    <React.Fragment>
      <BackgroundStyles backgroundColor={background} />
      <header>
        <NavigationBar
          navActive={navActive}
          background={approvedRouteTitles.includes(route) ? background : 'transparent'}
          displayMobile={displayMobile}
        />
        {approvedRouteTitles.includes(route) && (
          <RouteTitle
            navActive={navActive}
            route={route}
            color={color}
            displayMobile={displayMobile}
          />
        )}
        <MainLogo
          toggleActive={() => navActive && toggleActive(false)}
          displayMobile={displayMobile}
        />
        <Hamburger
          navActive={navActive}
          toggleActive={toggleActive}
          displayMobile={displayMobile}
        />
        <NavigationOverlay navActive={navActive}>
          <ul>
            {routes.map(route => (
              <li key={route.href.replace('/', '')}>
                <Link to={route.href} onClick={() => toggleActive(!navActive)}>
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </NavigationOverlay>
      </header>
    </React.Fragment>
  );
}

export default withRouter(Header);
