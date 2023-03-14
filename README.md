# Tech stack
* Cypress
* Typescript
* Cucumber-preprocessor
* Multiple Cucumber HTML report

# Steps
1. cd to path of project
2. Init repos with npm
```$ npm init -y```
3. Generate tsconfig.json file
```$ tsc --init```
4. Install dependencies
```
$ npm i cypress typescript @badeball/cypress-cucumber-preprocessor multiple-cucumber-html-reporter
```
# Open/run cypress
* Fetch dependencies first: ```$ npm install```
* Run all specs as config: `$ npx cypress run`
* Run a simple spec on local : `npx cypress run --spec cypress/e2e/features/login.feature`
* Run with specified browser : `npx cypress run --spec cypress/e2e/features/login.feature --browser chrome`
* Run with tags in cucumber
* Open Test Runner: `npx cypress open`

# Run with tags of cucumber
1. Set config in .cypress-cucumber-preprocessor

```
"filterSpecs": true,
"omitFiltered": true
```
2. Run command: 

* Run positive:
```
npx cypress run --e2e --browser chrome --env tags="@ValidAccount"
```
* Run negative:
```
npx cypress run --e2e --browser chrome --env tags="not @CheckFailedCase" --headless
```

# Run with WebKit (browser engine of Safari)

1. Add ```experimentalWebKitSupport: true``` to config file
2. Install playwright-webkit package ```yarn add -D playwright-webkit```
3. Run it as others

# Cypress Dashboard via sorry-cypress

```
Step #1. Start Docker engine on local
Step #2. Run: docker compose -f docker-compose.minio.yml up
Step #3: Open browser to access Dashboard: localhost:8080
Step #4: Create a projectId
Step #5: Update projectId field in Config file (cypress.config.ts)
```

# Run parallel
* Install: ```npm i cy2```
* Command run with cy2: ```cy2 run --e2e --env tags=\"not @CheckFailedCase\" --browser chrome --headless```
* Parallel: ```CYPRESS_API_URL=http://localhost:1234 yarn test:cy2 --parallel --record --key somekey --ci-build-id="<buildNumber>"```

# Integrate
## BrowserStack
#### Install the BrowserStack CLI: ```npm i browserstack-cypress-cli```
> Cypress CLI is a command-line tool that is used to enable communication between Cypress and BrowserStack

#### Starting BrowserStack Cypress-CLI v1.5.0, you can specify the Cypress configuration file that you want to use in two ways:
1. Mentioning the configuration file details in browserstack.json
2. Using the --cypress-config-file CLI parameter
```
# Pass a relative path to the CLI
browserstack-cypress run --sync --cypress-config-file ./cypress.config.ts

# Pass an absolute path like this
browserstack-cypress run --sync --cypress-config-file ./cypress.config.ts
```
#### Run with command
* Run all: ```$ browserstack-cypress run```
OR ```$ ./node_modules/.bin/browserstack-cypress run```
* Run a specific file: 
```browserstack-cypress run --sync --specs "cypress/e2e/features/login.feature"```

## Jenkins
* Refer script in Jenkinfile
* Some common plugins: ```Parameterize Trigger, Conditional BuildStep```

# Note
* To display the cypress folder: ```$ npx cypress open```
* Rename cypress.config.js to cypress.config.ts
* Generate report: ```$ node generate-multiple-cucumber-html-reporter.js```
* Resolve broken CSS on HTML report when running with Jenkins

Steps:
```
1. Manage Jenkins
2. Manage Nodes
3. Setting ( gear icon)
4. Consolo
5. Fill: System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
6. Click Run button
7. Re-build
```

# Mot so command can nho
```
1. then()
- Kiểu trả về dựa vào kiểu trả về của command trước đó
- Chỉ thực hiện khi command trước đó thực hiện xong
ex: cy.get('locator').then($locator => {$locator.click()})

2. wrap()
- Chuyển đổi variable để sử dụng cypress command
ex: cy.wrap($variable).type()
3. as()
- lưu giá trị vào một biến global
ex: cy.wrap($abc).as('abc')
```

# Refer document
* [Config for typescript](https://github.com/badeball/cypress-cucumber-preprocessor/blob/HEAD/docs/quick-start.md)
[copy and paste at](https://github.com/badeball/cypress-cucumber-preprocessor/blob/16e400c498ce8f6a13704c7b1513f26b48540428/examples/webpack-ts/cypress.config.ts)
* [Config json formatter](https://github.com/cucumber/json-formatter)

* [cypress-cucumber-testing](https://testingbot.com/resources/articles/cypress-cucumber-testing)
* [Link on Youtube](https://www.youtube.com/watch?v=3tkAoj1YNhI)
* [Integrate with BrowserStack](https://www.browserstack.com/docs/automate/cypress/configuration-file)
* [Run first test Cypress on BrowserStack](https://www.browserstack.com/docs/automate/cypress#Test_using_public_URL)
