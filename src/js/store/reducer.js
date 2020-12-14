import {combineReducers} from 'redux';
import {reducer as ships} from './ships/ships';
import {reducer as user} from './user/user';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.SHIPS]: ships,
  [NameSpace.USER]: user,
});
