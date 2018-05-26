let categories = [];
let movieElements = [];
let budget = 0;
let currentCost = [];
let totalCostValue = 0;

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

const setNewBudget = (newBudget) => {
  budget = newBudget;
};

const getNewBudget = () => {
  return budget;
};

const setCurrentCost = (newCost) => {
  console.log('New cost to add', newCost);
  currentCost.push(newCost);
};

const removeCurrentCost = (idToRemove) => {
  console.log('ID to remove', idToRemove);
  currentCost = currentCost.filter(c => c.id !== idToRemove);
};

const getCurrentCost = () => {
  return currentCost;
};

const costTotal = () => {
  totalCostValue = currentCost.reduce((totalCost, currentCost) => {
    return totalCost + currentCost.cost;
  }, 0);
  return totalCostValue;
};

const getTotalCostValue = () => {
  return totalCostValue;
};

module.exports = {
  getCategories,
  setCategories,
  getMovieElem,
  setMovieElem,
  setNewBudget,
  getNewBudget,
  setCurrentCost,
  removeCurrentCost,
  getCurrentCost,
  costTotal,
  getTotalCostValue,
};
