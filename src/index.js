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

const rootElement = document.querySelector('#root');

ReactDOM.render(<App/>, rootElement);
