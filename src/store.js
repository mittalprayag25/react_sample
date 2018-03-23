import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import getRootReducer from './reducers';

let middleware = [thunk];

if(process.env.NODE_ENV === 'dev') {
  const { logger } = require('redux-logger'); //eslint-disable-line global-require

  middleware = [...middleware, logger];
}

export default function getStore(persistedState) {
  const routeReducer = getRootReducer();
  const store = createStore(routeReducer, persistedState, applyMiddleware(...middleware));
  return store;
}
