const categoriesOutputDiv = document.getElementById('checkboxes');
// const data = require('./data');

const printDomString = (movieElem, categories) => {
  let domString = '';
  domString +=  `<div>`;
  categories.forEach((category) => {
    domString +=  `<h3>${category.categoryName}</h3>`;
    movieElem.forEach((movieElement) => {
      if (movieElement.categoryId === category.id) {
        domString += `<p>${movieElement.name}</p>`;
      }
    });
  });
  domString +=  `</div>`;
  return domString;
};

const printCategoriesToDom = (movieElem, categories) => {
  categoriesOutputDiv.innerHTML = printDomString(movieElem, categories);
};

module.exports = printCategoriesToDom;
