const loadCategories = require('./categories');
const loadMovieElem = require('./movieElements');
// const departmentDom = require('./departmentDom');
const data = require('./data');

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
};

const whenMovieElemLoad = function () {
  const movieElemData = JSON.parse(this.responseText).movieElements;
  data.setMovieElem(movieElemData);
  // departmentDom(departmentsData);
};

const errorFunction = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadCategories(whenCategoriesLoad, errorFunction);
  loadMovieElem(whenMovieElemLoad, errorFunction);
};

module.exports = {
  initializer,
};
