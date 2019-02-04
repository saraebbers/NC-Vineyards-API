const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile.js')[environment];
const database = require('knex')(configuration);
const cors = require('cors');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use( bodyParser.json() );

app.use( cors() );

app.set('port', process.env.PORT || 3001);

app.locals.title = 'NC Vineyards';


app.get('/', (request, response) => {
  response.status(200).json({message: 'NC Vineyards'})
})

app.get('/api/v1/vineyards', (request, response) => {
  let queryString = request.query

  if (Object.keys(queryString).length) {
    let region;
    let vineyardName;
    if (queryString.region) {
      region = queryString.region.toLowerCase()
    }
    if (queryString.name) {
      vineyardName = queryString.name.toLowerCase()
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
          response.status(404).json({message: `Could not find any resources matching your query (searchable terms are 'region' and 'name').`})
        }
      })
      .catch(error => {
        response.status(500).json(`Error retrieving data: ${error}`)
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
  const { id } = request.params
  database('vineyards').select()
    .then(vineyards => {
      let foundVineyard = vineyards.find(vineyard => {
        return vineyard.id === parseInt(id)
      })
      if (foundVineyard) {
        response.status(200).json(foundVineyard);
      } else {
        response.status(404).json({message: 'This id does not match an Id currently in the database, please resubmit request with correct id'})
      }
    })
    .catch(error => {
      response.status(500).json(`Error retrieving data: ${error}`)
    })
});

app.post('/api/v1/vineyards', (request, response) => {
  const vineyard = request.body;

  for (let requiredParameter of ['name', 'address', 'website', 'phone', 'region']) {
    if (!vineyard[requiredParameter]) {
      return response.status(422).json({message: `Expected Format: { name: <string>, address: <string>, website: <string>, phone: <string of (xxx) xxx-xxxx>, region: <string of Coast, Mountain, or Peidmont>  }.  You are missing a "${requiredParameter}" property.`})
    }
  }
  database('vineyards').insert(vineyard, 'id')
    .then(vineyard => {
      response.status(201).json({ id: vineyard[0] })
    })
    .catch(error => {
      response.status(500).json(`Error retrieving data: ${error}`)
    })
});

app.put('/api/v1/vineyards/:id', (request, response) => {
  const updatedVineyard = request.body;
  let id  = parseInt(request.params.id)

  database('vineyards').select()
    .then(vineyards => {
      let foundVineyard = vineyards.find(vineyard => {
        return vineyard.id === id
      })
      if (foundVineyard) {
        database('vineyards').where('id', id).update(updatedVineyard)
          .then(() => {
            response.status(201).json({id})
          })
      } else {
        response.status(404).json({message: 'This id does not match an Id currently in the database, unable to update'})
      }
    })
    .catch(error => {
      response.status(500).json(`Error updating data: ${error}`)
    })
});

app.delete('/api/v1/vineyards/:id', (request, response) => {
  let id = parseInt(request.params.id);
  database('vineyards').select()
    .then(vineyards => {
      const existingVineyard = vineyards.find(vineyard => {
        return id === vineyard.id
      })
      if (existingVineyard) {
        database('wines').where('vineyard_id', id).delete()
          .then(() => {
            database('vineyards').where('id', id).delete()
              .then(() => {
                response.status(200).json(`Successfully deleted vineyard with the id of ${id} as well as wines with the vineyard_id of ${id}`)
              })
          })
      } else {
        response.status(404).json(`Error on deletion: cannot find resource specified (vineyard id: ${id}). Check the id specified.`)
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
});

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
  const { id } = request.params
  database('wines').select()
    .then(wines => {
      let foundWine = wines.find(wine => {
        return wine.id === parseInt(id)
      })
      if (foundWine) {
        response.status(200).json(foundWine);
      } else {
        response.status(404).json({message: 'This id does not match an Id currently in the database, please resubmit request with correct id'})
      }
    })
    .catch(error => {
      response.status(500).json(`Error retrieving data: ${error}`)
    })
});

app.post('/api/v1/wines', (request, response) => {
  const wine = request.body;

  for (let requiredParameter of ['name', 'type', 'vineyard_id', 'color' ]) {
    if (!wine[requiredParameter]) {
      return response.status(422).json({message: `Expected Format: { name: <string>, type: <string>, color: <string> vineyard_id: <number>.  You are missing a "${requiredParameter}" property.`})
    }
  }
  database('wines').insert(wine, 'id')
    .then(wine => {
      response.status(201).json({ id: wine[0] })
    })
    .catch(error => {
      response.status(500).json(`Error retrieving data: ${error}`)
    })
});

app.put('/api/v1/wines/:id', (request, response) => {
  const updatedWine = request.body;
  let id  = parseInt(request.params.id)

  database('wines').select()
    .then(wines => {
      let foundWine = wines.find(wine => {
        return wine.id === id
      })
      if (foundWine) {
        database('wines').where('id', id).update(updatedWine)
          .then(() => {
            response.status(201).json({id})
          })
      } else {
        response.status(422).json({message: 'This id does not match an Id currently in the database, unable to update'})
      }
    })
    .catch(error => {
      response.status(500).json(`Error updating data: ${error}`)
    })
});

app.delete('/api/v1/wines/:id', (request, response) => {
  let id = parseInt(request.params.id);
  database('wines').select()
    .then(wines => {
      const existingWine = wines.find(wine => {
        return id === wine.id
      })

      if (existingWine) {
        database('wines').where('id', id).delete()
          .then(() => {
            response.status(200).json(`Successfully deleted wine with the id of ${id}`)
          })
      } else {
        response.status(404).json(`Error on deletion: cannot find resource specified (wine id: ${id}). Check the id specified.`)
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
});



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`);
});

module.exports = app;
