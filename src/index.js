import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/theme.css';
import AppRouter from './routers/index';
import configureStore from './redux/store/configureStore';

import './style/index.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector('#root')
);
