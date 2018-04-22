let categories = [];
let movieElements = [];
const currentCost = [];

const getCategories = () => {
  return categories;
};

const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

const getMovieElem = () => {
  return movieElements;
};

const setMovieElem = (movieElemArray) => {
  movieElements = movieElemArray;
};

const setCurrentCost = (newCost) => {
  currentCost.push(newCost);
};

const getCurrentCost = () => {
  return currentCost;
};

const costTotal = () => {
  console.log('currentCost: ', currentCost);
  return currentCost.reduce((totalCost, currentCost) => {
    console.log('totalCost: ', totalCost, 'currentCost: ', currentCost);
    return totalCost + currentCost;
  }, 0);
};

module.exports = {
  getCategories,
  setCategories,
  getMovieElem,
  setMovieElem,
  setCurrentCost,
  getCurrentCost,
  costTotal,
};
