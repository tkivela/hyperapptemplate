# Small Hyperapp template with testing included

Hyperapp template with Parcel bundler. Small and fast! 
Example unit and end to end test with Jest & Cypress.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

**What's inside?**

* `hyperapp` (Library for building web apps)

and for development time
* `parcel-bundler` (Blazing fast, zero configuration web application bundler)
* `hyperapp-redux-devtools` (Debugging hyperapp statechanges with Redux devtools)
* `jest` (Delightful JavaScript Testing)
* `cypress` (Fast, easy and reliable testing for anything that runs in a browser)
* `standard` (JavaScript Standard Style)
* `prettier-standard` (Code formatter)

Bundling is handled with parcel bundler (https://parceljs.org/) which provides fast bundles.

## Getting started

Clone and install deps

```
git clone https://github.com/tkivela/hyperapptemplate.git
cd hyperapptemplate
yarn
yarn start
```

Then open `http://localhost:1234` and edit `./src/` -files and press save. You must manually refresh browser window after editing sources. Bundling the application this way will generate unoptimized build with sourcemaps to 'build' directory.

## Directory structure

Majority of code lives in src directory:

```
src/
├── actions
├── components
├── state
├── index.js
```

* actions: actions which modify the state
* components: components which can be using jsx
* state: application's state tree
* index.js: main entry point

End to end browser tests are located in cypress -directory.


## Building for Production

```
yarn build
```

This will compile your JS and copy your assets to the `dist` folder which
you can deploy wherever as a webpage. `dist` folder also includes `hyperapp-redux-devtools.js`, you can delete that file if you don't run the code in development environment.

## Testing

```
yarn test
```

Running formats and lints code (Prettier & Standard) and then runs unit tests (Jest) and end to end tests (Cypress). If there are any errors in the end to end tests the script will leave a screenshot of the browser window which reproduces the error to `cypress/screenshot` folder. Screenshot folder is automatically deleted with each test run. If you want to create a video of the e2e testing run automatically to `cypress/videos` folder, just change `videoRecording=false` to `videoRecording=true` from package.json.


If you want to test steps in the Cypress UI first start the dev server (yarn start) and then run
```
yarn cy:open
```


I've included example tests for actions, UI snapshot with jest and end to end test with Cypress.

## Debugging

By using Redux Devtools extions for Chrome you can debug state changes in development build. Also normal debugging (with sourcemaps) can be done from browser's devtools.
