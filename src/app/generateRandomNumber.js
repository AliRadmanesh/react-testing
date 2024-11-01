export function generateRandomNumber(min, max) {
  const minCeil = Math.ceil(min);
  const maxCeil = Math.floor(max);

  return Math.floor(Math.random() * (maxCeil - minCeil + 1)) + minCeil;
}
