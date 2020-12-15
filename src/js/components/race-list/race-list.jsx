import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/ships/ships';
import {connect} from 'react-redux';
import {getUniqueRaceList} from '../../utils/utils';
import {getActiveRace, getShipsList} from '../../store/ships/selectors';

const RaceList = (props) => {
  const {shipsList, currentRace, onRaceClick} = props;
  const uniqueRaceList = getUniqueRaceList(shipsList);
  const [activeRace, setActiveRace] = useState(currentRace);

  return <ul className="catalog__race-list">
    {uniqueRaceList.map((race, index) => {
      return <li key={`${race}-${index}`} className={`catalog__race-item ${(activeRace === race) ? `catalog__race-item--active` : ``}`} onClick={() => {
       onRaceClick(race);
       setActiveRace(race); 
      }}>
        <a className="catalog__race-link">{race}</a>
      </li>;
    })}
  </ul>;
};

RaceList.propTypes = {};

const mapStateToProps = (state) => ({
  shipsList: getShipsList(state),
  currentRace: getActiveRace(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRaceClick(race) {
    dispatch(ActionCreator.setActiveRace(race));
  },
})

export {RaceList};
export default connect(mapStateToProps, mapDispatchToProps)(RaceList);