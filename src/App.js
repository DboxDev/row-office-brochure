import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes, secondaryRoutes } from 'data/routes';

import Header from 'components/includes/header';
import { ContainerStyles, GlobalStyles, TypographyStyles } from 'styles/global/_module';

import 'fonts.scss';

const allRoutes = routes.concat(secondaryRoutes);

function App() {
  return (
    <React.Fragment>
      <ContainerStyles />
      <GlobalStyles />
      <TypographyStyles />
      <Router>
        <Header />
        <Switch>
          {allRoutes.map(route => (
            <Route key={route.href.replace('/', '')} exact path={route.href} component={route.component} />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
