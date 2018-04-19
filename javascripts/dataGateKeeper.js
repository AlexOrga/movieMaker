const loadCategories = require('./categories');
const loadMovieElem = require('./movieElements');
const printDomString = require('./categoriesDom');
// const printElementsDom = require('./movieElementsDom');
const data = require('./data');
const getBudget = require('./budgetInput');

let categories = [];

const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  setCategories(categoriesData);
};

const whenMovieElemLoad = function () {
  const movieElemData = JSON.parse(this.responseText).movieElements;
  data.setMovieElem(movieElemData);
  printDomString(movieElemData, categories);
};

const errorFunction = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadCategories(whenCategoriesLoad, errorFunction);
  loadMovieElem(whenMovieElemLoad, errorFunction);
  getBudget();
};

module.exports = {
  initializer,
};
