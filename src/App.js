import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes, secondaryRoutes } from './data/routes';

import { Header } from './components/includes/_module';
import { GlobalStyles, TypographyStyles } from './styles/global/_module';

import './fonts.scss';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <TypographyStyles />
      <Router>
        {/* <Header /> */}
        <Switch>
          {routes.map(route => (
            <Route exact path={route.href} component={route.component} />
          ))}
          {secondaryRoutes.map(route => (
            <Route exact path={route.href} component={route.component} />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
