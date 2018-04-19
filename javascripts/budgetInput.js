const budgetButton = document.getElementById('budget-btn');

const getBudget = () => {
  let budget = 0;
  budgetButton.addEventListener('click', () => {
    const budgetInput = document.getElementById('budget-input').value;
    budget = budgetInput;
    return budget;
  });
};

module.exports = getBudget;
