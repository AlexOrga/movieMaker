const categoriesOutputDiv = document.getElementById('left-column');
// const data = require('./data');

const printDomString = (movieElem, categories) => {
  let domString = '';
  domString +=  `<div class="options">`;
  categories.forEach((category) => {
    domString +=  `<div class="category-container">`;
    domString +=  `<h3>${category.categoryName}</h3>`;
    domString +=    `<div class="checkboxes row">`;
    movieElem.forEach((movieElement) => {
      if (movieElement.categoryId === category.id) {
        domString += `<div class="option-item col-xs-3">`;
        domString += `<input type="checkbox" name="checkbox">`;
        domString += `<p class="option-name">${movieElement.name}</p>`;
        domString += `</div>`;
      }
    });
    domString +=    `</div>`;
    domString +=  `</div>`;
  });
  domString +=  `</div>`;
  return domString;
};

const printCategoriesToDom = (movieElem, categories) => {
  categoriesOutputDiv.innerHTML = printDomString(movieElem, categories);
};

module.exports = printCategoriesToDom;
