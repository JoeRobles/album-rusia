import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './index.css';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(addExpense({
  description: 'water bill',
  amount: 100,
  createdAt: 1515085200000,
}));

store.dispatch(addExpense({
  description: 'gas bill',
  amount: 300,
  createdAt: 1516640400000,
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
