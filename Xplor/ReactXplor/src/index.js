/* eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './store/configureStore';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-tab-panel/index.css';
import 'react-date-picker/index.css';
import 'react-select/dist/react-select.css';

import '../assets/scss/XplorStyles.scss';
import '../assets/glyphicon_css/glyphicons.css';
import '../assets/glyphicon_css/glyphicons-social.css';
import '../assets/glyphicon_css/glyphicons-halflings.css';
import '../assets/glyphicon_css/glyphicons-filetypes.css';
import '../assets/glyphicon_css/glyphicons-bootstrap.css';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
