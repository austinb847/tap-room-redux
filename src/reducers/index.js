import kegListReducer from './keg-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectedKegReducer from './selected-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  formVisibleOnPage: formVisibleReducer,
  selectedKeg: selectedKegReducer
});

export default rootReducer;