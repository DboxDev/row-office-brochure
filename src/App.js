import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes, secondaryRoutes } from 'data/routes';

import VideoIntro from 'components/includes/VideoIntro';
import Header from 'components/includes/Header';

import { ContainerStyles, RootStyles, TypographyStyles } from 'styles/global/_module';

import 'fonts.scss';

const allRoutes = routes.concat(secondaryRoutes);

function App() {
  const [displayMobile, toggleDisplayMobile] = useState(false);
  // const [windowDimensions, updateWindowDimensionState] = useState({ width: '', height: '' });

  const updateWindowDimensions = useCallback(() => {
    const width =
      window.innerWidth ||
      Math.max(document.documentElement.clientWidth, document.body.clientWidth);
    const height =
      window.innerHeight ||
      Math.max(document.documentElement.clientHeight, document.body.clientHeight);
    // updateWindowDimensionState({ width, height });

    if (width / height < 1.2 && width < 1050) {
      toggleDisplayMobile(true);
    } else {
      toggleDisplayMobile(false);
    }
  }, []);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, [updateWindowDimensions]);

  return (
    <React.Fragment>
      <ContainerStyles />
      <RootStyles />
      <TypographyStyles />
      <Router>
        {<VideoIntro />}
        <Header />
        <Switch>
          {allRoutes.map(route => {
            if (route.href === '/') {
              return (
                <Route
                  key={route.href.replace('/', '')}
                  exact
                  path={route.href}
                  render={() => <route.component displayMobile={displayMobile} />}
                />
              );
            } else {
              return (
                <Route
                  key={route.href.replace('/', '')}
                  exact
                  path={route.href}
                  component={route.component}
                />
              );
            }
          })}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
