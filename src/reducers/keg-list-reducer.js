import * as c from './../actions/ActionTypes'


export default (state = {}, action) => {
  const {name, brand, price, alcoholContent, id, pints} = action;
  switch (action.type) {
    case c.ADD_KEG:
      return {
        ...state,
        [id]: { 
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          id: id,
          pints: pints
        }
      };
    case c.DELETE_KEG:
      const newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};