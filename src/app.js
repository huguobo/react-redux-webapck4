import React from 'react';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';

const App = ({ store, routes, history }) =>
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>;

export default App;