// in this file you can append custom step methods to 'I' object
const myComtravo = "https://my.qa.comtravo.it/auth/login";

module.exports = function () {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    openMyComtravo() {
      this.amOnPage(myComtravo);
    },
  });
};
