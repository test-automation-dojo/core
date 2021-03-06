# Rabble Rouser Core E2E Tests

End to end tests for Rabble Rouser - A pluggable, extensible membership database for community organising

## Tech

 * Webpack + Babel
 * Cypress

## Running the tests

Running the script `./bin/e2e.sh` from the project root on your local machine is the best way to run the tests. This will also spin up the relevant containers and populate data.

To load up cypress to run the end-to-end tests locally, do:

```sh
$ [core]/bin/e2e.sh # make sure you have run this first to install key dependencies
$ cd e2e # make sure you're in the e2e directory
$ $(yarn bin)/cypress install # install the correct cypress binary for your system (if not linux)
$ bin/run_e2e_locally.sh # fire up cypress locally to run the e2e tests
```

Tests live in `cypress/integration`.  See `docs.cypress.io` for more usage information.

## Linting

`yarn lint`

See the README.md in the root of the repo for more information about our lint setup.
