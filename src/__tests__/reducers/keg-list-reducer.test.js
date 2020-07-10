import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  const keg = {
    name: 'Test keg',
    brand: 'Test Brand',
    price: 'Test price',
    alcoholContent: 'Test content',
    id: 1,
    pints: 124
  }

  test('Should return default state if no action type is specified', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });

  test('Should add a new keg to the keg list', () => {
    const { name, brand, price, alcoholContent, id, pints } = keg;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id,
      pints: pints
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id,
        pints: pints
      }
    })
  });


});