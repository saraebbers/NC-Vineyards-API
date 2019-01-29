const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile.js')[environment];
const database = require('knex')(configuration)


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use( bodyParser.json() );

app.set('port', process.env.port || 3000);
app.locals.title = 'NC Vineyards';

app.get('/api/v1/vineyards', (request, response) => {

});

app.get('/api/v1/vineyards/:id', (request, response) => {

});

app.post('/api/v1/vineyards', (request, response) => {

});

app.patch('/api/v1/vineyards', (request, response) => {

});

app.delete('/api/v1/vineyards', (request, response) => {

});

app.get('/api/v1/vineyards?region=mountains', (request, response) => {

});

app.get('/api/v1/vineyards?region=piedmont', (request, response) => {

});

app.get('/api/v1/vineyards?region=coastal', (request, response) => {

});

app.get('/api/v1/wines', (request, response) => {

});

app.get('/api/v1/wines/:id', (request, response) => {

});

app.post('/api/v1/wines', (request, response) => {

});

app.patch('/api/v1/wines', (request, response) => {

});

app.delete('/api/v1/wines/:id', (request, response) => {

});

process.on('uncaughtException', function (err) {
    console.log(err);
}); 


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`);
});