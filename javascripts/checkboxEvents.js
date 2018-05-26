const data = require('./data');
const makeReceipt = require('./costWindow');
const getValuesProgBar = require('./progressBar');

const checkboxes = document.getElementsByClassName('checkIt');
let elements = [];

const checkEvent = () => {
  for (let i = 0; i < checkboxes.length; i ++) {
    checkboxes[i].addEventListener('change', function (e) {
      if (this.checked) {
        addCompareMovieArray(e);
      } else {
        removeElements(e);
      }
      getValuesProgBar();
      makeReceipt(elements);
    });
  };
};

const addCompareMovieArray = (e) => {
  console.log('e:', e);
  const checkboxId = e.target.id * 1;
  const movieElemArray = data.getMovieElem();
  movieElemArray.forEach((element) => {
    if (element.id === checkboxId) {
      elements.push(element);
      data.setCurrentCost({cost: element.cost, id: element.id,});
    }
  });
};

const removeElements = (e) => {
  const checkboxId = e.target.id * 1;
  elements = elements.filter(e => e.id !== checkboxId);
  data.removeCurrentCost(checkboxId);
};

module.exports = checkEvent;
