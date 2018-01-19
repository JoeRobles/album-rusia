import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

let expenseOne = store.dispatch(addExpense({
  description: 'water bill',
  amount: 100,
  createdAt: 1000,
}));

let expenseTwo = store.dispatch(addExpense({
  description: 'gas bill',
  amount: 300,
  createdAt: -1000,
}));

store.dispatch(setTextFilter('water'));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter><App /></AppRouter>, document.getElementById('root'));
registerServiceWorker();
