import { FilterSettings, MAX_CARD_COUNT } from '../../utils/const';
import { extend } from '../../utils/utils';
import { shipsList } from '../../mock/ships';

const initialState = {
  shipsList: shipsList,
  activeRace: FilterSettings.DEFAULT_VALUE,
  cardCount: MAX_CARD_COUNT,
  activeCard: {},
};

const ActionType = {
  SET_ACTIVE_RACE: `SET_ACTIVE_RACE`,
  SET_CARD_COUNT: `SET_CARD_COUNT`,
  UPDATE_STATUS: `UPDATE_STATUS`,
  UPDATE_SHIP_STATUS: `UPDATE_SHIP_STATUS`,
};

const ActionCreator = {
  setActiveRace: (race) => ({
    type: ActionType.SET_ACTIVE_RACE,
    payload: race,
  }),
  setCardCount: () => ({
    type: ActionType.SET_CARD_COUNT,
    payload: MAX_CARD_COUNT
  }),
  updateShipStatus: (ship) => ({
    type: ActionType.UPDATE_SHIP_STATUS,
    payload: ship,
  }),
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_RACE:
      return extend(state, {
        activeRace: action.payload,
      });
    case ActionType.SET_CARD_COUNT:
      return extend(state, {
        cardCount: state.cardCount + action.payload,
      });
    case ActionType.UPDATE_SHIP_STATUS:
      return extend(state, {
        shipsList: state.shipsList.map((ship) => (ship.id === action.payload.id) ? action.payload : ship),
      });
  }
  return state;
}

export {reducer, ActionType, ActionCreator};
