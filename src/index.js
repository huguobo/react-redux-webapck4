
import React from 'react';
import ReactDOM from 'react-dom'
import browserHistory from 'react-router/lib/browserHistory';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import routes from './routes';
import reducers from './reducer';

const storeEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);
const store = createStore(reducers, {}, storeEnhancer);
const history = syncHistoryWithStore(browserHistory, store);

const el = React.createElement(App, { store, routes, history });
ReactDOM.render(el, document.getElementsByTagName('body')[0]);