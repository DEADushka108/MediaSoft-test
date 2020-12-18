import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {redirectToRoute} from '../../store/redirect/redirect-action';
import {connect} from 'react-redux';
import {AppRoute} from '../../utils/const';
import {Link} from 'react-router-dom';
import {ActionCreator} from '../../store/ships/ships';
import {shipDetails} from '../../types/ships';

const SmallCard = (props) => {
  const {ship, redirect, onAddCartClick} = props;
  const {id, name, previewImage, price, isInCart} = ship;
  const [favorite, setFavorite] = useState(isInCart);

  return <article className="small-card">
    <div className="small-card__image" onClick={() => {
      redirect(`${AppRoute.CARD}/${id}`);
    }}>
      <img src={previewImage} className="small-card__img"/>
    </div>
    <div className="small-card__wrapper">
      <h3 className="small-card__name">
        <Link to={`${AppRoute.CARD}/${id}`} className="small-card__link">{name}</Link>
      </h3>
      <p className="small-card__price">{price}$</p>
    </div>
    <button className="small-card__button" type="button" onClick={() => {
      onAddCartClick(ship);
      setFavorite(!favorite);
    }}>{favorite ? `In cart` : `Add`} </button>
  </article>;
};

SmallCard.propTypes = {
  ship: shipDetails,
  redirect: PropTypes.func.isRequired,
  onAddCartClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  redirect(route) {
    dispatch(redirectToRoute(route));
  },
  onAddCartClick(ship) {
    ship.isInCart = !ship.isInCart;
    dispatch(ActionCreator.updateShipStatus(ship));
  },
});

export {SmallCard};
export default connect(null, mapDispatchToProps)(SmallCard);
