const data = require('./data');
const makeReceipt = require('./costWindow');

const checkboxes = document.getElementsByClassName('checkIt');
const elements = [];

const checkEvent = () => {
  // const movieElemArray = data.getMovieElem();
  for (let i = 0; i < checkboxes.length; i ++) {
    checkboxes[i].addEventListener('change', function (e) {
      if (this.checked) {
        compareMovieArray(e);
      } else {
        console.log('unchecked');
      }
    });
  };
};

const compareMovieArray = (e) => {
  const checkboxId = e.target.id * 1;
  const movieElemArray = data.getMovieElem();
  movieElemArray.forEach((element) => {
    if (element.id === checkboxId) {
      elements.push(element);
    }
  });
  makeReceipt(elements);
  // progressBarUpdate(elements);
};

module.exports = checkEvent;
