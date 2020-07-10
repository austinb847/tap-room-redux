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

  const currentState = {
    1: {
      name: 'Corona extra',
      brand: 'Modelo',
      price: '3',
      alcoholContent: '4.3',
      id: 1,
      pints: 124
    },
    2:  {
      name: 'Natty Light',
      brand: 'Garbage',
      price: '2',
      alcoholContent: '1.1',
      id: 2,
      pints: 124
    }
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

  test('Should successfully update keg data to masterKegList', () => {
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

    expect(kegListReducer(currentState, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id,
        pints: pints
      }, 
      2:  {
        name: 'Natty Light',
        brand: 'Garbage',
        price: '2',
        alcoholContent: '1.1',
        id: 2,
        pints: 124
      }
    });
  });

  test('should delete a keg from the list', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    }

    expect(kegListReducer(currentState, action)).toEqual({
      2:  {
        name: 'Natty Light',
        brand: 'Garbage',
        price: '2',
        alcoholContent: '1.1',
        id: 2,
        pints: 124
      }
    });
  });


});