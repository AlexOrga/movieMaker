const data = require('./data');

const getValuesProgBar = () => {
  const budget = data.getNewBudget();
  console.log('budget: ', budget);
  const currentCost = data.costTotal();
  const costArray = data.getCurrentCost();
  console.log('costArray', costArray);
  console.log('currentCost: ', currentCost);
  const percent = (currentCost * 100) / budget;
  buildProgressBar(currentCost, budget, percent);
};

const printToDom = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
};

const buildProgressBar = (currentSpent, budgetMax, percent) => {
  let domString = '';
  domString += `<div class="progress">`;
  domString +=    `<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="${currentSpent}" aria-valuemin="0" aria-valuemax="${budgetMax}" style="width: ${percent}%">`;
  domString +=    `</div>`;
  domString +=  `</div>`;
  printToDom('progress-bar', domString);
};

// const progressBarUpdate = (elements) => {

// };

module.exports = getValuesProgBar;
