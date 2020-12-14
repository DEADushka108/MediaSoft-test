import React from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import history from '../../history/history.js';
import Main from '../main/main';
import Cart from '../cart/cart.jsx';
import {AppRoute} from '../../utils/const.js';

const App = () => {
  return (
    <BrowserRouter history={history}>
    <Switch>
      <Route exact path={`${AppRoute.ROOT}`}>
        <Main/>
      </Route>
      <Route exact path ={`${AppRoute.CART}`}>
        <Cart/>
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
