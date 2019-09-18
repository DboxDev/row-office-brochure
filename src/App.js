import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes, secondaryRoutes } from 'data/routes';

import ScrollToTop from 'components/utils/ScrollToTop';
import VideoIntro from 'components/includes/VideoIntro';
import ScreenRestriction from 'components/includes/ScreenRestriction';
import Header from 'components/includes/Header';

import { ContainerStyles, RootStyles, TypographyStyles } from 'styles/global/_module';

import 'fonts.scss';

const allRoutes = routes.concat(secondaryRoutes);

function App() {
  // Runs before component mounts
  const initialScreenSetup = () => {
    const width =
      window.innerWidth ||
      Math.max(document.documentElement.clientWidth, document.body.clientWidth);
    const height =
      window.innerHeight ||
      Math.max(document.documentElement.clientHeight, document.body.clientHeight);

    const initialObj = {};

    if (width / height > 1.2 && width > 1050) {
      initialObj.isMobile = false;
      initialObj.screenRestrictor = false;
    } else if (width / height > 1 && width < 1050) {
      initialObj.isMobile = true;
      initialObj.screenRestrictor = true;
    } else {
      initialObj.isMobile = true;
      initialObj.screenRestrictor = false;
    }

    return initialObj;
  };

  const [displayMobile, toggleDisplayMobile] = useState(initialScreenSetup().isMobile);
  const [displayScreenRestrictor, toggleScreenRestrictor] = useState(
    initialScreenSetup().screenRestrictor
  );

  // Runs when screen dimensions change
  const updateMobileScreen = useCallback(() => {
    const width =
      window.innerWidth ||
      Math.max(document.documentElement.clientWidth, document.body.clientWidth);
    const height =
      window.innerHeight ||
      Math.max(document.documentElement.clientHeight, document.body.clientHeight);

    if (width / height > 1 && width > 1050) {
      toggleDisplayMobile(false);
      displayScreenRestrictor && toggleScreenRestrictor(false);
    } else if (width / height > 1 && width < 1050) {
      toggleScreenRestrictor(true);
    } else {
      toggleDisplayMobile(true);
      displayScreenRestrictor && toggleScreenRestrictor(false);
    }
  }, [displayScreenRestrictor]);

  useEffect(() => {
    window.addEventListener('resize', updateMobileScreen);

    return () => {
      window.removeEventListener('resize', updateMobileScreen);
    };
  }, [updateMobileScreen]);

  return (
    <React.Fragment>
      <ContainerStyles />
      <RootStyles />
      <TypographyStyles />
      <Router>
        <ScrollToTop>
          {!displayMobile && <VideoIntro />}
          <Header displayMobile={displayMobile} displayScreenRestrictor={displayScreenRestrictor} />
          {!displayScreenRestrictor ? (
            <Switch>
              {allRoutes.map(route => (
                <Route
                  key={route.href.replace('/', '')}
                  exact
                  path={route.href}
                  render={() => <route.component displayMobile={displayMobile} />}
                />
              ))}
            </Switch>
          ) : (
            <ScreenRestriction />
          )}
        </ScrollToTop>
      </Router>
    </React.Fragment>
  );
}

export default App;
