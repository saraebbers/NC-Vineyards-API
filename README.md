# Build Your Own Backend - North Carolina Vineyards API

#### Time to relax and enjoy a stroll through our selection of beautiful North Carolina Vineyards. This API lets you find up to 30 stunning vineyards and some of thier associated wines while providing location and contact information for each vineyard so you can plan your own Northern Carolina vineyard tour depending on the area you plan on trekking through! A PostgreSQL database with a well documented API and built with Node.js, Express and Knex.js. 

## To Contribute to the Project:

- Follow the setup instructions above to get the app up and running locally on your machine.

- Our list of Issues on GitHub Issues: (https://github.com/Cody-Price/BYOB/issues)
  Please use these issues to direct the contributions you desire to make.

- To send a Pull Request via GitHub:
    - Checkout a new branch
    - Push up changes to your forked repo
    - Request the Pull Request to the original repo following the PR template
    - Include a brief commit message details the changes you have made, including a note ensuring that tests and linter were passing prior to the pull.  (If you have a failing lint issue please include a screen shot of both the issue and code you wrote)
    - Before submitting, Rebase your work on the current master branch (for Rebase workflow questions please reference at: `https://git-scm.com/docs/git-rebase`
    
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

## Technologies Used
- Node.js
- Express
- Knex
- Heroku
- Mocha
- Chai 
- Chai-http
- TravisCI
- Git/Github

## Project Requirements
Project spec [link](http://frontend.turing.io/projects/build-your-own-backend.html).

Backend Checklist [link](http://frontend.turing.io/projects/build-your-own-backend.html).

## Database/Server created and designed by Cody Price and Sara Ebbers.
