import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';

describe('rootReducer', () => {
  let store = createStore(rootReducer);

  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      masterKegList: {},
      formVisibleOnPage: false
    });
  });

  test('should check that initial state of kegListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_KEG',
      name: 'test name',
      brand: 'test brand',
      price: 'test price',
      alcoholContent: 'test content',
      id: 1,
      pints: 124
    }
    store.dispatch(action)
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
    
  })

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
  
});
