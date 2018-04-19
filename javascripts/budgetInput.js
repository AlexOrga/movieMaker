const budgetButton = document.getElementById('budget-btn');
const buildProgressBar = require('./progressBar');

const getBudget = () => {
  let budget = 0;
  budgetButton.addEventListener('click', () => {
    const budgetInput = document.getElementById('budget-input').value;
    budget = budgetInput;
    buildProgressBar(2000, budget);
  });
};

module.exports = getBudget;
