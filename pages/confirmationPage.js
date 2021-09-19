//Place for functions to reduce repetative code and increase readability of the main file
const { I } = inject();

module.exports = {
  recievedBookingLabel: {
    xpath: '//p[@class = "confirmation-message__subline"]',
  },

  assertBookingIsReceived: function () {
    I.see("We received your booking.", this.recievedBookingLabel);
  },
};
