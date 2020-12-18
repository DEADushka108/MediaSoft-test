import React from 'react';
import PropTypes from 'prop-types';
import SmallCard from '../small-card/small-card';
import {shipDetails} from '../../types/ships';

const ShipsList = (props) => {
  const {ships, count} = props;
  const shipsToShow = ships.slice(0, count);

  return <div className="catalog__ships-list">
    {shipsToShow.map((ship) => {
      const {id} = ship;
      return <SmallCard key={id} ship={ship}/>;
    })}
  </div>;
};

ShipsList.propTypes = {
  ships: PropTypes.arrayOf(shipDetails).isRequired,
  count: PropTypes.number.isRequired,
};

export default ShipsList;
