let categories = [];
let movieElements = [];

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

module.exports = {
  getCategories,
  setCategories,
  getMovieElem,
  setMovieElem,
};
