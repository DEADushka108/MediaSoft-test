import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import {connect} from 'react-redux';
import {ActionCreator as Ships} from '../../store/ships/ships';
import {shipDetails} from '../../types/ships';


const CardScreen = (props) => {
  const {ship, onAddCartClick} = props;
  const {name, image, description, price, isInCart, rating} = ship;

  return <Fragment>
    <Header/>

    <main className="page-main">
      <div className="page-main__wrapper">
        <h1 className="visually-hidden">Ship card</h1>
        <section className="ship-card ship-card--full">
          <div className="ship-card__hero">
            <div className="ship-card__bg">
              <img className="ship-card__img" src={image} alt={name} />
            </div>
          </div>
          <div className="ship-card__wrapper">
            <div className="ship-card__rating">
              <p className="ship-card__text">Rating: {rating}</p>
            </div>
            <div className="ship-card__price">
              <p className="ship-card__text">Price: {price}$</p>
            </div>
            <div className="ship-card__description">
              <p className="ship-card__text">Description: {description}</p>
            </div>
          </div>
          <button className="ship-card__button" type="button" onClick={() => {
            onAddCartClick(ship);
          }}>
            {isInCart ? `In Cart` : `Add to cart`}
          </button>
        </section>
      </div>
    </main>

    <Footer/>

  </Fragment>;
};

CardScreen.propTypes = {
  ship: shipDetails,
  onAddCartClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onAddCartClick(ship) {
    ship.isInCart = !ship.isInCart;
    dispatch(Ships.updateShipStatus(ship));
  }
});

export {CardScreen};
export default connect(null, mapDispatchToProps)(CardScreen);
