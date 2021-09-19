//Place for functions to reduce repetative code and increase readability of the main file
const { I } = inject();

//Generates number to select random option in the result list
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = {
  firstSelectOptionButton: {
    xpath: '(//button[@data-cy = "SelectFlightOption"]) [1]',
  },

  selectOptionRandomButton: {
    xpath: `(//button[@data-cy = "SelectFlightOption"]) 
    [${getRandomInt(1, 10)}]`,
  },

  assertFlightResult: function () {
    I.waitForElement(this.firstSelectOptionButton, 60);
  },

  selectRandomOption: function () {
    I.click(this.selectOptionRandomButton);
  },
};
