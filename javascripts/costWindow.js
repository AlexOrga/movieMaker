const data = require('./data');
const canMakeOrNot = require('./canMakeMovie');

const makeReceipt = (elements) => {
  const totalCostValue = data.getTotalCostValue();
  let domString = '';
  elements.forEach((element) => {
    domString += `<div class="receipt-item">`;
    domString +=    `<p>${element.name}: $${element.cost}</p>`;
    domString +=  `</div>`;
  });
  domString += `<div class="receipt-item">`;
  domString +=    `<h4><u><em>Current Cost: $${totalCostValue}</em></u></h4>`;
  domString +=  `</div>`;
  canMakeOrNot(elements);
  printReceipt('costs', domString);
};

const printReceipt = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
  data.costTotal();
};

module.exports = makeReceipt;
