// const buildProgressBar = require('./progressBar');

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
    newBudget(budget);
  });
};

const newBudget = (updatedBudget) => {
  console.log(updatedBudget);
  return updatedBudget;
};

module.exports = {
  getBudget,
  newBudget,
};
