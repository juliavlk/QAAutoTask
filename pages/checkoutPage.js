//Place for functions to reduce repetative code and increase readability of the main file
const { I } = inject();

module.exports = {
  flightCheckoutLabel: { xpath: '//h3["Flight checkout"]' },
  nameCheckoutLabel: {
    xpath: '//div[@class = "ctr-checkout-traveler"]',
  },
  bookThisTripButton: {
    xpath: '//button[@aria-label = "book this flight option"]',
  },

  assertOnCheckoutPage: function () {
    I.see("Flight checkout", this.flightCheckoutLabel);
  },

  assertTravelerName: function (name) {
    I.see(name, this.nameCheckoutLabel);
  },

  clickBookTripButton: function () {
    I.click(this.bookThisTripButton);
  },
};
