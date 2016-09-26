import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from '/imports/ui/containers/App.js';
import Layout from '/imports/ui/containers/Layout.js';
import Places from '/imports/ui/containers/Places.js';
import Place from '/imports/ui/containers/Place.js';
import LeafletMap from '/imports/ui/containers/Map.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={ AppContainer }>
      <Route component={ Layout }>
        <IndexRoute component={ Places } />
        <Route path="/place/:id" component={ Place } />
        <Route path="/map" component={ LeafletMap } />
      </Route>
    </Route>
  </Router>
)
