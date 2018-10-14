const { setWorldConstructor, setDefaultTimeout } = require("cucumber");
const puppeteer = require("puppeteer");
const scope = require("./support/scope");

const World = function() {
  scope.driver = puppeteer;
  scope.context = {};
};

setDefaultTimeout(60 * 1000);
setWorldConstructor(World);
