export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, id, pints } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    id: id,
    pints: pints
  }
}

export const selectKeg = (keg) => {
  const { name, brand, price, alcoholContent, id, pints } = keg;
  return {
    type: 'SELECT_KEG',
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    id: id,
    pints: pints
  }
}

export const resetKeg = () => ({
  type: 'RESET_KEG'
})