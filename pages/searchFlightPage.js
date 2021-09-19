//Place for functions to reduce repetative code and increase readability of the main file
const { I } = inject();

//Generates Date
const getDateWithOffset = (offset) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + offset);
  return tomorrow.getDate();
};

module.exports = {
  selectTravelersField: { xpath: '//div[@class = "ctr-chips"]' },
  getSelectTravelerButton: (name) => ({ xpath: `//p[@data-cy = "${name}"]` }),

  departureField: { xpath: '//input[@placeholder = "Departure"]' },
  destinationField: { xpath: '//input[@placeholder = "Destination"]' },

  departureFieldButton: { xpath: '//div[@data-cy = "Berlin Brandenburg"]' },
  destinationFieldButton: { xpath: '//div [@data-cy = "Franz Josef Strauss"]' },

  datePicker: { xpath: "//ctr-input-datepicker" },

  calendarStartDate: {
    xpath: `(//ctr-month)[1]//button[contains(.,"${getDateWithOffset(1)}")]`,
  },
  calendarEndDate: {
    xpath: `(//ctr-month)[2]//button[contains(.,"${getDateWithOffset(61)}")]`,
  },

  nextMonthButton: {
    xpath:
      '//div[contains(@class, "ctr-header--is-next-month-calendar") ]//button[@class = "ctr-header__button ctr-header__button--next"]',
  },

  searchFlightsButton: { xpath: '//button[@data-cy = "Search flights"]' },

  selectTraveler: function (travelerName) {
    I.click(this.selectTravelersField);
    I.fillField(this.selectTravelersField, travelerName);
    I.click(this.getSelectTravelerButton(travelerName));
  },

  selectDeparture: function (city) {
    I.fillField(this.departureField, city);
    I.click(this.departureFieldButton);
  },

  selectDestination: function (city) {
    I.fillField(this.destinationField, city);
    I.click(this.destinationFieldButton);
  },

  selectStartDate: function () {
    I.click(this.datePicker);
    I.click(this.calendarStartDate);
  },

  selectEndDate: function () {
    I.click(this.nextMonthButton);
    I.click(this.calendarEndDate);
  },

  clickSearchFlightsButton: function () {
    I.click(this.searchFlightsButton);
  },
};
