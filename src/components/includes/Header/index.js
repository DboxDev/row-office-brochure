import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from 'data/routes';

import { BackgroundStyles } from 'styles/global/_module';
import MainLogo from './MainLogo';
import Hamburger from './Hamburger';
import RouteTitle from './RouteTitle';

const NavigationBar = styled.div`
  width: 100%;
  height: 120px;
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.background};
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
      font-size: 5vh;
      margin: 0.5em 0;
      font-family: 'SangBleu Kingdom', serif;
      font-weight: normal;
      font-style: normal;
      color: #fff;
      transition: ${props => (props.navActive ? 'all 500ms ease' : 'all 0ms ease')};
      opacity: 0;
      transform: ${props => (!props.navActive ? 'translateX(-120px)' : 'translateX(0)')};
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

  footer {
    bottom: 0;
    width: 100%;
    position: absolute;
    text-align: center;
    color: #fff;
    padding: 1em 0;
    p {
      margin: 0;
      &.legal-link {
        margin: 1em 0;
      }
      a {
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
    background: '#FFF',
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

function Header({ restrictScreen, location }) {
  let route = location.pathname.replace('/', '').toLowerCase() || 'home';
  const { background, color } = colorMap[route];

  const [navActive, toggleActive] = useState(false);

  return (
    <React.Fragment>
      <BackgroundStyles backgroundColor={background} />
      <header>
        <NavigationBar
          navActive={navActive}
          background={
            approvedRouteTitles.includes(route) && !restrictScreen ? background : 'transparent'
          }
        />
        {approvedRouteTitles.includes(route) && !restrictScreen && (
          <RouteTitle navActive={navActive} route={route} color={color} />
        )}
        <MainLogo toggleActive={() => navActive && toggleActive(false)} />
        {!restrictScreen && <Hamburger navActive={navActive} toggleActive={toggleActive} />}

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
          <footer>
            <p>WWW.ROWDTLA.COM</p>
            <p>&copy; ROW DTLA</p>
          </footer>
        </NavigationOverlay>
      </header>
    </React.Fragment>
  );
}

export default withRouter(Header);
