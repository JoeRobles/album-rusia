/* istanbul ignore next */
import React from 'react';/* istanbul ignore next */
import ReactDOM from 'react-dom';/* istanbul ignore next */
import { Provider } from 'react-redux';/* istanbul ignore next */
import AppRouter from './routers/AppRouter';/* istanbul ignore next */
import './index.css';/* istanbul ignore next */
import 'react-dates/lib/css/_datepicker.css';/* istanbul ignore next */

import configureStore from './store/configureStore';/* istanbul ignore next */

import registerServiceWorker from './registerServiceWorker';/* istanbul ignore next */
/* istanbul ignore next */
const store = configureStore();
/* istanbul ignore next */
const jsx = (/* istanbul ignore next */
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

/* istanbul ignore next */
ReactDOM.render(jsx, document.getElementById('root') || document.createElement('div'));
/* istanbul ignore next */
registerServiceWorker();
