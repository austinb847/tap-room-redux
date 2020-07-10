import * as c from './../actions/ActionTypes'

export default (state = null, action) => {
  const { name, brand, price, alcoholContent, id, pints } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      return {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          id: id,
          pints: pints
        }
      }
  
    default:
      return state
  }
}