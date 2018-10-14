# React Puppeteer Cucumber Example

This is a minimal example setup showing how to configure Puppeteer, Cucumber, Jest and Enzyme with create-react-app. You can use this setup for BDD/TDD in React projects.

> _You can also do BDD and TDD **simultaneously**! Essentially, your behavior tests inform your unit tests, which in turn inform your code. It's pretty awesome. People call it the [double testing loop](https://www.slideshare.net/JessicaMauerhan/double-loop-tdd-bdd-done-right)._

## Install

```
git clone https://www.github.com/rishispeets/react-puppeteer-cucumber-example
cd react-puppeteer-cucumber-example
npm i
```

## Usage

- Run `test` to start Jest in watchmode for unit testing.
- Run `e2e` to run Cucumber for functional testing.
- Run `e2e-headless` to run Cucumber with Chrome in headless mode for functional testing.

```
"test": "react-scripts test",
"e2e": "NODE_ENV=debug cucumber-js src/tests/features",
"e2e-headless": "cucumber-js src/tests/features",
```

## To-Do

- Add script for single run Jest execution.
- Add high-level description of file and folder structure.

## Contribute

PRs accepted.

## Attribution

- Slides by [@paulbjensen](https://github.com/paulbjensen): [E2E testing Single Page Apps and Apis with Cucumber.js and Puppeteer](https://www.slideshare.net/paulbjensen/e2e-testing-single-page-apps-and-apis-with-cucumberjs-and-puppeteer)
- Different setup by [@spirosikmd](https://github.com/spirosikmd): [cucumber-puppeteer-example](https://github.com/spirosikmd/cucumber-puppeteer-example)

## License

MIT © Rishi Speets
