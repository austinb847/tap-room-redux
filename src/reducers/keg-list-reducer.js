export default (state = {}, action) => {
  const {name, brand, price, alcoholContent, id, pints} = action;
  switch (action.type) {
    case 'ADD_KEG':
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
    default:
      return state;
  }
};