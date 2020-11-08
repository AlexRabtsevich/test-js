import React, { ReactElement, Suspense } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { v4 as uuid } from 'uuid';

import { routesWithComponent } from './common/routes';
import { getAppStyles } from './styles';
import SuspenseStyled from './components/suspense';

function App(): ReactElement {
  const styles = getAppStyles();

  return (
    <div className={styles.root}>
      <BrowserRouter>
        <CssBaseline />
        <Suspense fallback={<SuspenseStyled />}>
          <Container fixed>
            <Switch>
              {routesWithComponent.map((router) => (
                <Route path={router.path} key={uuid()} component={router.component} exact />
              ))}
            </Switch>
          </Container>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
