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
  response.status(200).send('NC Vineyards')
})

app.get('/api/v1/vineyards', (request, response) => {
  let queryString = request.query

  if(Object.keys(queryString).length) {
    let region;
    let vineyardName;
    if(queryString.region) {
      region = queryString.region.toLowerCase()
    }
    if(queryString.name) {
      vineyardName = queryString.name.toLowerCase()
      console.log(vineyardName)
    }
    database('vineyards').select()
      .then(vineyards => {
        let matchingVineyards = vineyards.filter(vineyard => {
          if (vineyard.region.toLowerCase() === region) {
            return vineyard
          } else if (vineyard.name.toLowerCase() === vineyardName) {
            return vineyard
          }
        })
        if (matchingVineyards.length) {
          response.status(200).json(matchingVineyards)
        } else {
          response.status(404).json({message: 'Could not find any resources matching your query, please check your query string and try again.'})
        }
      })
  } else {
    database('vineyards').select()
      .then(vineyards => {
        response.status(200).json(vineyards);
      })
      .catch(error => {
        response.status(500).json(`Error retrieving data: ${error}`)
      })
  }
});

app.get('/api/v1/vineyards/:id', (request, response) => {
  //return an individual vineyard
  //return 404 sad
  //catch error
});

app.post('/api/v1/vineyards', (request, response) => {
  // add a vineyard assuming correct entry in body
  //return 201 successful creation, return id
  //return 422 cant make new entry with error message
  // catch 500
});

app.put('/api/v1/vineyards', (request, response) => {
  // fix information assuming correct entry-- Block efforts to change the id
  //return (201) for successful update return id
  // return (?ERROR) if cant successfully update, 
  //catch 500
});

app.delete('/api/v1/vineyards/:id', (request, response) => {
  //remove a vineyard by id
  //return (204) for successful delete-- return id
  // return (?ERROR) if cant successfully delete ?do we need to add permissions for deletion,\
  //catch 500
  //also make sure to run the delete all wines code first
});

// app.get('/api/v1/vineyards', (request, response) => {
//   console.log(request.query)
//   response.status(200).json(request.query)
//   // will be used for query
//   //?= query for searching each region, name, 
//   //return 200
//   //return 404
//   //return 500
// });

app.get('/api/v1/wines', (request, response) => {
  database('wines').select()
  .then(wines => {
    response.status(200).json(wines);
  })
  .catch(error => {
    response.status(500).json(`Error retrieving data: ${error}`)
  })
  // add this to a test, eventhough we have it written
});

app.get('/api/v1/wines/:id', (request, response) => {
  //return an individual wine
  //return 404 sad
  //catch error
});

app.post('/api/v1/wines', (request, response) => {
  // add a vineyard assuming correct entry in body
  //return 201 successful creation, return id
  //return 422 cant make new entry with error message
  // catch 500
});

app.put('/api/v1/wines', (request, response) => {
  // fix information assuming correct entry-- Block efforts to change the id
  //return (201) for successful update return id
  // return (422) if cant successfully update, 
  //catch 500
});

app.delete('/api/v1/wines/:id', (request, response) => {
  //remove a vineyard by id
  //return (204) for successful delete-- return id
  // return (422-- bad format???) if cant successfully delete ?do we need to add permissions for deletion,\
  //catch 500
});



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`);
});

module.exports = app;
