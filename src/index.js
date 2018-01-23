import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './index.css';

import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
