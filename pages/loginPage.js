//Place for functions to reduce repetative code and increase readability of the main file
const { I } = inject();

module.exports = {
  workEmailField: { xpath: '//input[@data-cy = "Email"]' },
  passwordField: { xpath: '//input[@data-cy = "Password"]' },
  signInButton: { xpath: '//button[@data-cy = "SignIn"]' },
  bookTripLabel: { xpath: '//span["Book a trip"]' },

  enterCredentials: function (workEmail, password) {
    I.fillField(this.workEmailField, workEmail);
    I.fillField(this.passwordField, password);
  },

  assertLoggedIn: function () {
    I.see("Book a trip", this.bookTripLabel);
  },

  clickSignInButton: function () {
    I.click(this.signInButton);
  },
};
