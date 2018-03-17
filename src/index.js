import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import './index.css';
import 'react-dates/lib/css/_datepicker.css';

import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import 'bootstrap'

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root') || document.createElement('div'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root') || document.createElement('div'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

registerServiceWorker();
