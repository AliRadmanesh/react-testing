// Add thousands seperator to prices
export const numberWithCommas = (item) => {
  if (typeof item === 'string' || typeof item === 'number') {
    return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return item;
};

// Check if an object is empty
export const isObjEmpty = (obj) => {
  if (obj !== null && obj !== undefined) {
    return Object.keys(obj).length === 0;
  }
  return true;
};
