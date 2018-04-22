const makeReceipt = (elements) => {
  let domString = '';
  elements.forEach((element) => {
    domString += `<div class="receipt-item">`;
    domString +=    `<p>${element.name}: $${element.cost}</p>`;
    domString +=  `</div>`;
  });
  printToCost('costs', domString);
};

const printToCost = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
};

module.exports = makeReceipt;
