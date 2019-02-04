# CONTRIBUTING
We welcome all contributions to our BYOB project. There are two issue streams we go by, feel free to use either: 

- Our list of Issues on GitHub Issues: (https://github.com/Cody-Price/BYOB/issues)
Please use these issues to direct the contributions you desire to make.
  
- OR You may utilize the Waffle.io board if it is more to your liking.
[![Waffle.io - Issues in progress](https://badge.waffle.io/Cody-Price/BYOB.png?label=in%20progress&title=In%20Progress)](http://waffle.io/Cody-Price/BYOB)

## Setup
- Follow the setup instructions located in the [GETTING_STARTED](https://github.com/Cody-Price/BYOB/blob/master/GETTING_STARTED.md) guide, to get the app up and running locally on your machine.

(This guide assumes that the git remote name of the main repo is `upstream` and that your fork is named `origin`)

- To send a Pull Request via GitHub:
    - Checkout a new branch on your local machine (based on `upstream/master`)
    - Utilize rebase work flow (for Rebase workflow questions please reference at: `https://git-scm.com/docs/git-rebase`)
    - Push up changes to your forked repo branch and make necessary PR into forked repo's master
    - Request the Pull Request to the original repo following the PR template
    - Include a brief commit message that details the changes you have made, including a note ensuring that tests and linter were passing prior to the pull.  (If you have a failing lint issue please include a screen shot of both the issue and code in question)

    
## Ensure your code is Tested prior to making a PR
Tests, are run using Mocha, Chai and ChaiHttp.  To run the test suite, first prepare the test database: 

First, you will need to create the testing environment database on your local machine.  You do this by typing the following commands into your terminal: 

* `psql`
* `CREATE DATABASE vineyardstest;`

Exit PostgreSQL with the command `\q`

Next, you will need to run the tests.  You can do this with

* `npm test`

Finally, update any pre-existing test to ensure functionality, and/or add a test to ensure your new additions have been tested.  This is required to have your PR considered for merging.  

## Ensure your code is Linted prior to making a PR
Linting ensures all our code has the same standards.  You can review Linting standards in the root directory .eslintrc.js file

In order to run the linter type in the following command:
* `eslint <filepath>`

[BACK TO README](https://github.com/Cody-Price/BYOB)
