const data = require('./data');

const printCanMakeorNot = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
};

const canMakeOrNot = () => {
  const totalCostValue = data.getTotalCostValue();
  console.log('totalCostValue: ', totalCostValue);
  const budget = data.getNewBudget();
  if (budget >= totalCostValue) {
    let canMake = '';
    canMake += `<h3>You Can Make The Movie!</h3>`;
    printCanMakeorNot('can-make', canMake);
  } else {
    let canNotMake = '';
    canNotMake += `<h3>Sorry, You Can't Make The Movie</h3>`;
    canNotMake += `<h3>:(</h3>`;
    printCanMakeorNot('can-make', canNotMake);
  }
};

module.exports = canMakeOrNot;
