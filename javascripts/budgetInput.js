const budgetButton = document.getElementById('budget-btn');
const buildProgressBar = require('./progressBar');

const printBudget = (budgetInput) => {
  const getBudgetDisplay = document.getElementById('display-budget');
  let domString = '';
  domString += `<h2>$${budgetInput}</h2>`;
  getBudgetDisplay.innerHTML = domString;
};

const getBudget = () => {
  let budget = 0;
  budgetButton.addEventListener('click', () => {
    const budgetInput = document.getElementById('budget-input').value;
    budget = budgetInput;
    buildProgressBar(2000, budget);
    printBudget(budgetInput);
  });
};

module.exports = getBudget;
