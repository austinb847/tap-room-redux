import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('formVisibleReducer', () => {
  test('should return default state if no action type is specified', () => {
    expect(formVisibleReducer(false, {type: null})).toEqual(false);
  });


  test('should toggle from visibility state to true', () => {
    expect(formVisibleReducer(false, {type: 'TOGGLE_FORM'})).toEqual(true);
    
  })
  
  
});
