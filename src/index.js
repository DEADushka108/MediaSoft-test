import './styles/style.scss';
/**
 * Create svg sprite
 * @param {File} r loaded file for svg sprite
 */
const requireAll = (r) => r.keys().forEach(r)
requireAll(require.context('./img/icons', true, /\.svg$/));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/app/app.jsx';
import store from './js/store/store';
import { Provider } from 'react-redux';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , rootElement);
