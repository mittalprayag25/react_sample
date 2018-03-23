/*eslint-disable import/first*/
import './util/ie-polyfills';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';

import throttle from 'lodash/throttle';

import getStore from './store';

import App from './App';
import LoginAndSignup from './components/pages/login-and-signup';

import { loadState, saveState } from './localStorage';


const persistedState = loadState();
const store = getStore(persistedState);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginAndSignup} />
        <Route exact path="/signup" component={LoginAndSignup} />
        <Route path="/forgotPassword/:emailToken" component={LoginAndSignup} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  rootEl
);
