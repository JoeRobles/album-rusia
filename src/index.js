import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './index.css';
import 'react-dates/lib/css/_datepicker.css';

import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { startSetExpenses } from './actions/expenses';
import { firebase } from './firebase/firebase';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root') || document.createElement('div'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root') || document.createElement('div'));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
});

registerServiceWorker();
