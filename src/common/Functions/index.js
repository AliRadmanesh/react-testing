// Curtesy of Ali Radmanesh
export const numberWithCommas = (item) => {
  if (typeof item === 'string' || typeof item === 'number') {
    return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return item;
};
