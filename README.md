# Build Your Own Backend - North Carolina Vineyards API

#### Time to relax and enjoy a stroll through our selection of beautiful North Carolina Vineyards. This API lets you find up to 30 stunning vineyards and some of thier associated wines while providing location and contact information for each vineyard so you can plan your own Northern Carolina vineyard tour depending on the area you plan on trekking through! A PostgreSQL database with a well documented API and built with Node.js, Express and Knex.js.

## How to Use:

#### Dependencies
  These set up instructions assume that you already have the following installed:
  * PostgreSQL
  * Mocha / Chai / Chai-Http (for testing)
  * Knex.js
  * Node.js
  * Express.js
  * eslint

## How to Install
  If you are planning to contribute to our code (Which we WELCOME!), it is a good idea to begin by forking this repo using the fork button in the top-right corner of this screen.  You should then be able to use git clone to copy your fork onto your local machine.  

#### How to Git Clone
Open your terminal and navigate to the area you want your new directory to be located, and enter the following command:
* `git clone https://github.com/YOUR_GITHUB_USERNAME_HERE/BYOB`

Get into your new local copy of the BYOB directory:
* `cd BYOB`

And then add an `upstream` remote that points to the main repo:
* `git remote add upstream https://github.com/Cody-Price/BYOB`

Pull in the latest version of master from upstream (ie: the main repo)
* `git pull upstream master`

## Get yourself up and Running

#### Create Postgres Database and Run Migrations
First, you will need to create the development environment database on your local machine.  You do this by typing the following commands into your terminal: 

* `psql`
* `CREATE DATABASE vineyards;`

Exit PostgreSQL with the command `\q`

Next, you will need to create tables in the development database.  You do this with Knex.js:  The first line will create your tables, the next will seed them with 30 vineyards and 90 wines.  

* `knex migrate:latest`
* `knex seed:run`

After seeding your database, it is time to start your server.  If the script succeeds you are ready to start developing.  If not, take a look at the output, as it should be informative enough to help you troubleshoot.  

* `npm install`
* `npm start`

If you need to exit the server at any time you can use the following command:
* `control + c`

## Troubleshooting
If you run into problems, feel free to reach out on GitHub and/or check with the Developer Community on slack.  

## API Endpoints:

#### Vineyards
```
GET /api/v1/vineyards // get all vineyards
--> returns an array of vineyard objects

GET /api/v1/vineyards${queryString}
queryString: ?region=[Mountains OR Coast OR Piedmont] --> returns all vineyards associated with given region.
queryString: ?name=[Enter given name with '%20' between each word] --> returns an array of one vineyard object with a matching name.

GET /api/v1/vineyards/:id // get a specific vineyard
--> returns a specific vineyard object

POST /api/v1/vineyards  // create a new vineyard
--> required parameters: 'name'(string), 'address'(string), 'phone'(string in format '(XXX) XXX-XXXX'), 'region'(string), and 'region'(string of either 'Coast', 'Mountains', or 'Piedmont')

PUT /api/v1/vineyards/:id  // edit a given vineyard with corrected information for any one(or multiple) parameter(s) required in the POST vineyards endpoint directly above excluding the id (primary key).

DELETE /api/v1/vineyards/:id  // delete a specific vineyard and all wines associated with specified vineyard
```
#### Wines
```
GET /api/v1/wines // get all wines
--> returns an array of all wine objects

GET /api/v1/wines/:id // get a specific wine
--> returns a specific wine object

POST /api/v1/wines // create a new wine
--> required parameters: 'name'(string), 'color'(string), 'type'(string), 'vineyard_id'(number, this is to be associated with the primary key id of the associated vineyard)

PUT /api/v1/wines/:vineyard_id  // edit a given wine with corrected information for any one(or multiple) parameter(s) required in the POST wines endpoint directly above excluding the id (primary key).

DELETE /api/v1/wines/:id  // delete a specific wine

```
### Screenshots of various requests to the server utilizing the POSTMAN application.
#### Screenshot of a GET request to the vineyards database.
![screen shot 2019-01-31 at 12 51 39 pm](https://user-images.githubusercontent.com/40974490/52081920-a493a500-2558-11e9-8118-7bb01cedcadb.png)

#### Screenshot of a GET request to the wines database.
![screen shot 2019-01-31 at 12 52 18 pm](https://user-images.githubusercontent.com/40974490/52081966-cab94500-2558-11e9-866c-5287f3ce9d9f.png)

#### Screenshot of a QUERY GET request as well as the response.
![screen shot 2019-01-31 at 12 54 15 pm](https://user-images.githubusercontent.com/40974490/52082031-f0464e80-2558-11e9-8e6a-f1265dd095bc.png)

![screen shot 2019-01-31 at 12 54 25 pm](https://user-images.githubusercontent.com/40974490/52082156-3ef3e880-2559-11e9-907f-028ce17f2dbf.png)

#### Screenshot of a POST request to the vineyards database as well as the response.
![screen shot 2019-01-31 at 12 57 25 pm](https://user-images.githubusercontent.com/40974490/52082335-c3df0200-2559-11e9-97d8-a96736f808f2.png)

#### Screenshot of a PUT request to the wines database as well as the response.
![screen shot 2019-01-31 at 1 00 21 pm](https://user-images.githubusercontent.com/40974490/52082691-b7a77480-255a-11e9-875e-7e772e799aba.png)

#### Example of a DELETE request to the wines database as well as the response.
![screen shot 2019-01-31 at 1 00 48 pm](https://user-images.githubusercontent.com/40974490/52082768-e32a5f00-255a-11e9-99f5-7fcab4bde177.png)


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

[![Waffle.io - Issues in progress](https://badge.waffle.io/Cody-Price/BYOB.png?label=in%20progress&title=In%20Progress)](http://waffle.io/Cody-Price/BYOB)
