// const getBudget = require('./budgetInput');

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

module.exports = buildProgressBar;
