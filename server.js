const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile.js')[environment];
const database = require('knex')(configuration)


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use( bodyParser.json() );

app.set('port', process.env.port || 3000);

app.locals.title = 'NC Vineyards';


app.get('/', (request, response) => {
  response.status(200).json('NC Vineyards')
})

app.get('/api/v1/vineyards', (request, response) => {
  database('vineyards').select()
    .then(vineyards => {
      response.status(200).json(vineyards);
    })
    .catch(error => {
      response.status(500).json(`Error retrieving data: ${error}`)
    })
});

app.get('/api/v1/vineyards/:id', (request, response) => {

});

app.post('/api/v1/vineyards', (request, response) => {

});

app.patch('/api/v1/vineyards', (request, response) => {

});

app.delete('/api/v1/vineyards', (request, response) => {

});

// app.get('/api/v1/vineyards', (request, response) => {
  //will be used for query
// });

app.get('/api/v1/wines', (request, response) => {
  database('wines').select()
  .then(wines => {
    response.status(200).json(wines);
  })
  .catch(error => {
    response.status(500).json(`Error retrieving data: ${error}`)
  })
});

app.get('/api/v1/wines/:id', (request, response) => {

});

app.post('/api/v1/wines', (request, response) => {

});

app.patch('/api/v1/wines', (request, response) => {

});

app.delete('/api/v1/wines/:id', (request, response) => {

});



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`);
});
