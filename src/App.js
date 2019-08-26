import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContextProvider from 'provider/ContextProvider';

import { routes, secondaryRoutes } from 'data/routes';

import Header from 'components/includes/Header';
import { ContainerStyles, RootStyles, TypographyStyles } from 'styles/global/_module';

import 'fonts.scss';

const allRoutes = routes.concat(secondaryRoutes);

function App() {
  return (
    <ContextProvider>
      <ContainerStyles />
      <RootStyles />
      <TypographyStyles />
      <Router>
        <Header />
        <Switch>
          {allRoutes.map(route => (
            <Route key={route.href.replace('/', '')} exact path={route.href} component={route.component} />
          ))}
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
