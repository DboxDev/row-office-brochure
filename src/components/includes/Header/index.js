import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../../data/routes';
import MainLogo from './MainLogo.js';
import Hamburger from './Hamburger.js';

const NavigationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: black;
  transition: all 500ms ease;
  opacity: ${props => (props.navActive ? 1 : 0)};
  visibility: ${props => (props.navActive ? 'visible' : 'hidden')};
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    color: #fff;
    padding: 0;
    margin: 0;
    li {
      list-style-type: none;
      text-align: center;
      font-size: 4rem;
      margin: 0.5em 0;
      font-family: 'SangBleu Kingdom', serif;
      font-weight: normal;
      font-style: normal;
      color: #fff;
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

function Header() {
  const [navActive, toggleActive] = useState(false);

  return (
    <React.Fragment>
      <header>
        <MainLogo navActive={navActive} />
        <Hamburger navActive={navActive} toggleActive={toggleActive} />
      </header>
      <NavigationOverlay navActive={navActive}>
        <ul>
          {routes.map(route => (
            <li key={route.href.replace('/', '')}>
              <Link to={route.href}>{route.title}</Link>
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
    </React.Fragment>
  );
}

export default Header;
