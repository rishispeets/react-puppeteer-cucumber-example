const { When, Then } = require("cucumber");
const { openHomePage, shouldSeeWelcomeText } = require("../support/actions");

When("I open the page", openHomePage);

Then("I should see some welcome text", shouldSeeWelcomeText);
