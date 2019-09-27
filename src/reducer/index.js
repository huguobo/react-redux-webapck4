import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import config from './config';
import frameworks from './framework';


const reducers  = combineReducers({
  routing: routerReducer,
  config,
  frameworks,
})

export default reducers;