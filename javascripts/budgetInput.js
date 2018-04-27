const data = require('./data');
const getValuesProgBar = require('./progressBar');

const printBudget = (budgetInput) => {
  const getBudgetDisplay = document.getElementById('display-budget');
  let domString = '';
  domString += `<h2>$${budgetInput}</h2>`;
  getBudgetDisplay.innerHTML = domString;
};

const getBudget = () => {
  let budget = 0;
  const budgetButton = document.getElementById('budget-btn');
  budgetButton.addEventListener('click', () => {
    const budgetInput = document.getElementById('budget-input').value;
    budget = budgetInput;
    printBudget(budget);
    data.setNewBudget(budget);
    getValuesProgBar();
  });
};

module.exports = getBudget;
