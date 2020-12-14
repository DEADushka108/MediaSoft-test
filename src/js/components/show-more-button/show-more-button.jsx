import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/ships/ships';
import {connect} from 'react-redux';

const ShowMoreButton = (props) => {
  const {list, count, onClick} = props;

  return (count < list.length) ? <button className="catalog__button" type="button" onClick={onClick}>Show more</button> : null;
};

ShowMoreButton.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.setCardCount());
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
