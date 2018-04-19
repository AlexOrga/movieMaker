const categoriesOutputDiv = document.getElementById('checkboxes');
// const data = require('./data');

const printDomString = (movieElem, categories) => {
  let domString = '';
  domString += `<h3>${categories[0].categoryName}</h3>`;
  domString +=  `<p>${movieElem[0].name}</p>`;
  return domString;
};

const printCategoriesToDom = (movieElem, categories) => {
  categoriesOutputDiv.innerHTML = printDomString(movieElem, categories);
};

module.exports = printCategoriesToDom;
