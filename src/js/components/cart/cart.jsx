import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import { setCartList } from '../../store/ships/selectors';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import { ActionCreator } from '../../store/ships/ships';
import { redirectToRoute } from '../../store/redirect/redirect-action';

const Cart = (props) => {
  const {shipsInCart, onCloseClick, redirect} = props;
  const price = shipsInCart.reduce(function(prev, curr) { return prev + curr.price }, 0);
  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Cart</h1>
      <section className="cart">
        <ul className="cart__list">
          {shipsInCart.map((ship, index) => {
            return <li key={`${ship.name}-${index}`} className="cart__item">
              <button type="button" className="cart__close-button" onClick={() => {
                onCloseClick(ship);
              }}>
                <svg className="cart__close-icon">
                  <use xlinkHref="#cart-remove-item"></use>
                </svg>
              </button>
              <Link to={`${AppRoute.CARD}/${ship.id}`} className="cart__link">
                <img className="cart__image" src={ship.previewImage} alt={ship.name}></img>
                <p className="cart__text">{ship.name}</p>
                <p className="cart__text">{ship.price}$</p>
              </Link>
            </li>
          })}
        </ul>
        <div className="cart__total">
          <p className="cart__total-text">Total price:</p>
          <p className="cart__total-text">{price}$</p>
        </div>
        <div className="cart__button-group">
          <button className="cart__button-submit" type="button" disabled={shipsInCart.length === 0} onClick={() => {
            redirect(`${AppRoute.FORM}`);
          }}>Buy</button>
          <Link to={`${AppRoute.ROOT}`} className="cart__button-continue">Continue</Link> 
        </div>
      </section>
    </main>

    <Footer/>

  </Fragment>
};

const mapStateToProps = (state) => ({
  shipsInCart: setCartList(state),
})

const maoDispatchToProps = (dispatch) => ({
  onCloseClick(ship) {
    ship.isInCart = !ship.isInCart;
    dispatch(ActionCreator.updateShipStatus(ship));
  },
  redirect(route) {
    dispatch(redirectToRoute(route));
  },
})

export {Cart}
export default connect(mapStateToProps, maoDispatchToProps)(Cart);
