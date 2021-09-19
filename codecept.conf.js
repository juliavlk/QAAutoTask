exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "http://localhost",
      show: true,
      browser: "chromium",
      //Wait for DOMContentLoaded event
      waitfornavigation: "domcontentoaded",
      waitForAction: 500,
      restart: false,
    },
  },
  include: {
    I: "./steps_file.js",
    loginPage: "./pages/loginPage.js",
    searchFlightPage: "./pages/searchFlightPage.js",
    searchResultsPage: "./pages/searchResultsPage.js",
    checkoutPage: "./pages/checkoutPage.js",
    confirmationPage: "./pages/confirmationPage.js",
  },
  bootstrap: null,
  mocha: {},
  name: "QAAutoTask",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
