import * as c from './../actions/ActionTypes'

export default (state = { keg: null}, action) => {
  const { name, brand, price, alcoholContent, id, pints } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      return { 
          ...state,
            keg: {
            name: name,
            brand: brand,
            price: price,
            alcoholContent: alcoholContent,
            id: id,
            pints: pints
          }
      }
    case c.RESET_KEG:
      return {
        ...state,
        keg: null
      }
  
    default:
      return state
  }
}