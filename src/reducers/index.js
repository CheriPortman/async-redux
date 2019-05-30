import { combineReducers } from 'redux';
import characters from './characterReducer';
import characterDetail from './characterDetailReducer';

export default combineReducers({
  characters,
  characterDetail
});
