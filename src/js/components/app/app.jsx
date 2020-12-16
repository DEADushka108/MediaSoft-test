import React from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import history from '../../history/history.js';
import Main from '../main/main';
import Cart from '../cart/cart.jsx';
import CardScreen from '../card-screen/card-screen';
import {AppRoute} from '../../utils/const.js';
import { findItemById } from '../../utils/utils.js';
import { getShipsList } from '../../store/ships/selectors.js';
import { connect } from 'react-redux';
import ContactScreen from '../contact-screen/contact-screen.jsx';
import FormScreen from '../form-screen/form-screen.jsx';

const App = (props) => {
  const {shipsList} = props;

  return (
    <BrowserRouter history={history}>
    <Switch>
      <Route exact path={`${AppRoute.ROOT}`}>
        <Main/>
      </Route>
      <Route exact path={`${AppRoute.CART}`}>
        <Cart/>
      </Route>
      <Route exact path={`${AppRoute.CARD}/:id`} render={(routeProps) => {
        const id = routeProps.match.params.id;
        const ship = findItemById(id, shipsList);
        return <CardScreen ship={ship} {...routeProps}/>;
      }}/>
      <Route exact path={`${AppRoute.CONTACT}`}>
        <ContactScreen/>
      </Route>
      <Route exact path={`${AppRoute.FORM}`}>
        <FormScreen/>
      </Route>
    </Switch>
    </BrowserRouter>
  )
};

const mapStateToProps = (state) => ({
  shipsList: getShipsList(state),
});

export {App}
export default connect(mapStateToProps)(App);
