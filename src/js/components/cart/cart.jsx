import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import { setCartList } from '../../store/ships/selectors';
import { connect } from 'react-redux';

const Cart = (props) => {
  const {shipsInCart} = props;
  console.log(shipsInCart);
  const price = shipsInCart.reduce(function(prev, curr) { return prev + curr.price }, 0);
  console.log(price);
  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Cart</h1>
      <section className="cart">
        <ul className="cart__list">
          {shipsInCart.map((ship, index) => {
            return <li key={`${ship.name}-${index}`} className="cart__item">
              <button type="button" className="cart__close-button">
                <svg className="cart__close-icon">
                  <use xlinkHref="#cart-remove-item"></use>
                </svg>
              </button>
              <img className="cart__image" src={ship.previewImage} alt={ship.name}></img>
              <p className="cart__text">{ship.name}</p>
              <p className="cart__text">{ship.price}$</p>
            </li>
          })}
        </ul>
        <div className="cart__total">
          <p className="cart__text">{price}$</p>
        </div>
        <button className="cart__button-submit" type="button">Buy</button> 
      </section>
    </main>

    <Footer/>

  </Fragment>
};

const mapStateToProps = (state) => ({
  shipsInCart: setCartList(state),
})

export {Cart}
export default connect(mapStateToProps)(Cart);
