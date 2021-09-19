const credentials = {
  workEmail: "robot+qatask@comtravo.com",
  password: "Qatask@08",
};

const travelDetais = {
  travelerName: "Sophie",
  travelerFullName: "Sophie lie",
  abbrBerlin: "BER",
  abbrMunich: "MUC",
};

Feature("Trip Booking");

Scenario(
  "Log in and select a traveler",
  ({ I, loginPage, searchFlightPage }) => {
    I.openMyComtravo();
    loginPage.enterCredentials(credentials.workEmail, credentials.password);
    loginPage.clickSignInButton();
    loginPage.assertLoggedIn();
    searchFlightPage.selectTraveler(travelDetais.travelerName);
  }
);

Scenario("Choose destination", ({ searchFlightPage }) => {
  searchFlightPage.selectDeparture(travelDetais.abbrBerlin);
  searchFlightPage.selectDestination(travelDetais.abbrMunich);
});

Scenario("Select date", ({ searchFlightPage }) => {
  searchFlightPage.selectStartDate();
  searchFlightPage.selectEndDate();
});

Scenario("Select Flight", ({ searchFlightPage, searchResultsPage }) => {
  searchFlightPage.clickSearchFlightsButton();
  searchResultsPage.assertFlightResult();
  searchResultsPage.selectRandomOption();
});

Scenario("Book the trip", ({ checkoutPage }) => {
  checkoutPage.assertOnCheckoutPage();
  checkoutPage.assertTravelerName(travelDetais.travelerFullName);
  checkoutPage.clickBookTripButton();
});

Scenario("Assert flight is booked", ({ confirmationPage }) => {
  confirmationPage.assertBookingIsReceived();
});
