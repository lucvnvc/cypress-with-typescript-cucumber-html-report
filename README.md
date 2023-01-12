# Tech stack
* Cypress
* Typescript
* Cucumber-preprocessor
* Multiple Cucumber HTML report

# Steps
* cd to path of project
* Init repos with npm
``` $ npm init -y```
* Generate tsconfig.json file
``` $ tsc --init```
* Install dependencies
``` $ npm i cypress typescript @badeball/cypress-cucumber-preprocessor multiple-cucumber-html-reporter```
* Open/run cypress
```$ npx cypress run```
```$ npx cypress open```

# Note
* To display the cypress folder: ```$ npx cypress open```
* Rename cypress.config.js to cypress.config.ts
* Generate report: ```$ node generate-multiple-cucumber-html-reporter.js```

# Refer document
* [Config for typescript](https://github.com/badeball/cypress-cucumber-preprocessor/blob/HEAD/docs/quick-start.md)
[copy and paste at](https://github.com/badeball/cypress-cucumber-preprocessor/blob/16e400c498ce8f6a13704c7b1513f26b48540428/examples/webpack-ts/cypress.config.ts)
* [Config json formatter](https://github.com/cucumber/json-formatter)

* [cypress-cucumber-testing](https://testingbot.com/resources/articles/cypress-cucumber-testing)
* [Link on Youtube](https://www.youtube.com/watch?v=3tkAoj1YNhI)