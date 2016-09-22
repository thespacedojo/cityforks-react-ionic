import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from '/imports/ui/containers/App.js';
import Layout from '/imports/ui/containers/Layout.js';
const Places = () => { return <div>Test</div>}

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={ AppContainer }>
      <Route component={ Layout }>
        <IndexRoute component={ Places } />
      </Route>
    </Route>
  </Router>
)
