const data = require('./data');

const makeReceipt = (elements) => {
  let domString = '';
  elements.forEach((element) => {
    domString += `<div class="receipt-item">`;
    domString +=    `<p>${element.name}: $${element.cost}</p>`;
    domString +=  `</div>`;
  });
  printReceipt('costs', domString);
};

const printReceipt = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
  data.costTotal();
};

module.exports = makeReceipt;
