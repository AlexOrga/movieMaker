const checkboxes = document.getElementsByClassName('checkItBrah');

const checkEvent = () => {
  for (let i = 0; i < checkboxes.length; i ++) {
    const checkbox = checkboxes[i];
    checkbox.addEventListener('change', function () {
      console.log(e.target.parentNode.children[1]);
    });
  }
};

module.exports = checkEvent;
