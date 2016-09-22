import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { AppContainer } from '/imports/ui/containers/App.js';
const Places = () => { return null }

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ Places } />
    </Route>
  </Router>
)
