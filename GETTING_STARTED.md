# GETTING STARTED

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

Your terminal should now have the message:
- ![screen shot 2019-02-04 at 1 37 03 pm](https://user-images.githubusercontent.com/40974490/52235715-2c8fec80-2882-11e9-8376-ba38d9aa9815.png)

If the above matches your terminal your server is now running on http://localhost:3001 and should see a screen similar
to this one in your browser:
- ![screen shot 2019-02-04 at 1 37 29 pm](https://user-images.githubusercontent.com/40974490/52235722-30237380-2882-11e9-8bee-fc6a7aaddf70.png)

If you need to exit the server at any time you can use the following command:
* `control + c`

## Troubleshooting
If you run into problems, feel free to reach out on GitHub and/or check with the Developer Community on slack. 

[BACK TO README](https://github.com/Cody-Price/BYOB)

[TO API ENDPOINTS](https://github.com/Cody-Price/BYOB/blob/master/API_ENDPOINTS.md)

[TO CONTRIBUTIONS](https://github.com/Cody-Price/BYOB/blob/master/CONTRIBUTING.md)


