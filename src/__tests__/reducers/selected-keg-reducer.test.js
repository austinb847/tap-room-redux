import selectedKegReducer from '../../reducers/selected-keg-reducer';


describe('selectedKegReducer', () => {
  let action;
  const selectedKeg = {
    1: {
      name: 'Corona extra',
      brand: 'Modelo',
      price: '3',
      alcoholContent: '4.3',
      id: 1,
      pints: 124
    }
  }
  

  test('should return default state if no action type is specified ', () => {
    expect(selectedKegReducer(null, {type: null})).toEqual(null);
    
  });

  test('should succesfully select a specific keg from the master list', () => {
    const { name, brand, price, alcoholContent, id, pints } = selectedKeg;
    action = {
      type: 'SELECT_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id,
      pints: pints
    }
    expect(selectedKegReducer({keg: null}, action)).toEqual({
      keg: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id,
        pints: 124
      }
    });
  });
  

});