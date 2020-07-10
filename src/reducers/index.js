import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterKegList: kegListReducer
});

export default rootReducer;