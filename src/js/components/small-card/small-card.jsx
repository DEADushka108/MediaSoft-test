import React from 'react';
import PropTypes from 'prop-types';
import {redirectToRoute} from '../../store/redirect/redirect-action';
import {connect} from 'react-redux';
import { AppRoute } from '../../utils/const';
import { Link } from 'react-router-dom';

const SmallCard = (props) => {
  const {ship, redirect} = props;
  const {id, name, previewImage} = ship;

  return <article className="small-card">
    <div className="small-card__image" onClick={() => {
      redirect(`${AppRoute.CARD}/${id}`);
    }}>
      <img src={previewImage} className="small-card__img"/>
    </div>
    <h3 className="small-card__name">
      <Link to={`${AppRoute.CARD}/${id}`} className="small-card__link">{name}</Link>
    </h3>
  </article>
};

SmallCard.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  redirect(route) {
    dispatch(redirectToRoute(route));
  }
});

export {SmallCard};
export default connect(null, mapDispatchToProps)(SmallCard);
