import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import DashboardComponent from './containers/dashboard/dashboard.component';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardComponent}/>
    <Route path="*" component={DashboardComponent}/>
  </Route>
);
