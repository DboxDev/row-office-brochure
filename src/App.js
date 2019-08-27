import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContextProvider from 'provider/ContextProvider';

import { routes, secondaryRoutes } from 'data/routes';

import Header from 'components/includes/Header';
import { ContainerStyles, RootStyles, TypographyStyles } from 'styles/global/_module';

import ScreenRestriction from 'components/includes/ScreenRestriction';

import 'fonts.scss';

const allRoutes = routes.concat(secondaryRoutes);

function App() {
  const [restrictScreen, toggleRestrictScreen] = useState(false);

  const updateWindowDimensions = useCallback(() => {
    const width =
      window.innerWidth ||
      Math.max(document.documentElement.clientWidth, document.body.clientWidth);
    const height =
      window.innerHeight ||
      Math.max(document.documentElement.clientHeight, document.body.clientHeight);

    if (width / height > 1.2 || width > 1050) {
      toggleRestrictScreen(false);
    } else {
      toggleRestrictScreen(true);
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
    <ContextProvider>
      <ContainerStyles />
      <RootStyles />
      <TypographyStyles />
      <Router>
        <Header restrictScreen={restrictScreen} />
        {restrictScreen ? (
          <ScreenRestriction />
        ) : (
          <Switch>
            {allRoutes.map(route => (
              <Route
                key={route.href.replace('/', '')}
                exact
                path={route.href}
                component={route.component}
              />
            ))}
          </Switch>
        )}
      </Router>
    </ContextProvider>
  );
}

export default App;
