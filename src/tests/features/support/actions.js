const expect = require("expect");
const scope = require("./scope");

/**
 * Returns puppeteer config for current env.
 *
 */
const isDebugging = () =>
  process.env.NODE_ENV === "debug"
    ? {
        headless: false,
        slowMo: 250,
        devtools: true
      }
    : {};

const openHomePage = async () => {
  // Launch the browser and a page while setting the viewing options.
  if (!scope.browser) scope.browser = await scope.driver.launch(isDebugging());
  scope.context.currentPage = await scope.browser.newPage();
  scope.context.currentPage.emulate({
    viewport: {
      width: 500,
      height: 2400
    },
    userAgent: ""
  });

  // Visit the homepage.
  const visit = await scope.context.currentPage.goto("http://localhost:3000");

  return visit;
};

const shouldSeeWelcomeText = async () => {
  const html = await scope.context.currentPage.$eval(
    ".App-link",
    e => e.innerHTML
  );

  expect(html).toBe("Learn React");
};

module.exports = { openHomePage, shouldSeeWelcomeText };
