import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/ships/ships';
import {connect} from 'react-redux';
import {shipDetails} from '../../types/ships';

const ShowMoreButton = (props) => {
  const {list, count, onClick} = props;

  return (count < list.length) ? <button className="catalog__button" type="button" onClick={onClick}>Show more</button> : null;
};

ShowMoreButton.propTypes = {
  list: PropTypes.arrayOf(shipDetails).isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.setCardCount());
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
