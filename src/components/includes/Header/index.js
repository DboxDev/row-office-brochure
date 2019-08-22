import React, { useState, useContext, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Context from 'config/Context';
import { routes } from 'data/routes';

import { mediaMin } from 'styles/mediaQueries';
import { BackgroundStyles } from 'styles/global/_module';
import MainLogo from './MainLogo.js';
import Hamburger from './Hamburger.js';

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
      font-size: 3rem;
      margin: 0.5em 0;
      font-family: 'SangBleu Kingdom', serif;
      font-weight: normal;
      font-style: normal;
      color: #fff;
      ${mediaMin.desktop`
        font-size: 4rem;
      `}
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

const backgroundColorMap = {
  home: {
    backgroundColor: '#FFF'
  },
  availability: {
    backgroundColor: '#000'
  },
  facts: {
    backgroundColor: '#000'
  },
  maps: {
    backgroundColor: '#FFF'
  },
  test: {
    backgroundColor: '#FFF'
  }
};

const darkSlideIndices = [0, 8, 16];

function Header(props) {
  const context = useContext(Context);
  const { storyIndex } = context.state;

  let route = props.location.pathname.replace('/', '').toLowerCase() || 'home';
  const { backgroundColor } = backgroundColorMap[route];

  const [darkColorScheme, toggleDarkColorScheme] = useState(false);
  const [navActive, toggleActive] = useState(false);

  useEffect(() => {
    if (darkSlideIndices.includes(storyIndex)) {
      return toggleDarkColorScheme(true);
    }

    toggleDarkColorScheme(false);
  }, [storyIndex]);

  return (
    <React.Fragment>
      <BackgroundStyles backgroundColor={backgroundColor} />
      <header>
        <MainLogo
          backgroundColor={backgroundColor}
          navActive={navActive}
          darkColorScheme={darkColorScheme}
        />
        <Hamburger
          backgroundColor={backgroundColor}
          navActive={navActive}
          darkColorScheme={darkColorScheme}
          toggleActive={toggleActive}
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
          <footer>
            <p className="underline legal-link">
              <Link to="/legal" onClick={() => toggleActive(!navActive)}>
                LEGAL
              </Link>
            </p>
            <p>WWW.ROWDTLA.COM</p>
            <p>&copy; ROW DTLA</p>
          </footer>
        </NavigationOverlay>
      </header>
    </React.Fragment>
  );
}

export default withRouter(Header);
