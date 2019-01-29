const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use( bodyParser.json() );

app.set('port', process.env.port || 3000);
app.locals.title = 'NC Vineyards';
app.locals.vineyards = [
  {
    name: 'Addison Farms Vineyard',
    region: 'Mountains',
    website: 'www.addisohttp://www.addisonfarms.net/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstreamnfarms.net',
    address: '4005 NEW LEICESTER HWY LEICESTER, NC',
    phoneNumber: '828-581-9463',
    id: 1
  },
  {
    name: 'Banner Elk Winery',
    region: 'Mountains',
    website: 'http://www.bannerelkwinery.com/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstream',
    address: '60 Deer Run Lane, Banner Elk, NC 28604',
    phoneNumber: '828-898-9090',
    id: 2
  },
  {
    name: 'Belle Nicho Winery',
    region: 'Mountains',
    website: 'http://www.bellenichowinery.com/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstream#wines-section',
    address: '525 Patton Valley Drive, Nebo, NC 28761',
    phoneNumber: '828-659-3168',
    id: 3
  },
  {
    name: 'Biltmore',
    region: 'Mountains',
    website: 'https://www.biltmore.com/?utm_source=www.ncwine.org&utm_medium=referral&utm_campaign=downstream',
    address: 'One Approach Road, Asheville, NC 28803',
    phoneNumber: '828-225-1333',
    id: 4
  }
];
app.locals.wines = [
  {
    name: 'Gratitude',
    abv: '',
    color: 'Red',
    type: 'Chambourcin',
    vineyard_id: 1
  },
  {
    name: 'Vitalita Reserve',
    abv: '',
    color: 'Red',
    type: 'Sangiovese',
    vineyard_id: 1
  },
  {
    name: 'Coming Home',
    abv: '',
    color: '',
    type: 'Cabernet Sauvignon',
    vineyard_id: 1
  },
  {
    name: 'Cabernet Sauvignon',
    abv: '',
    color: 'Red',
    type: 'Cabernet Sauvignon',
    vineyard_id: 2
  },
  {
    name: 'Seyval Blanc Reserve (Estate)',
    abv: '',
    color: 'White',
    type: 'Seyval Blanc',
    vineyard_id: 2
  },
  {
    name: 'Marechal Foch Reserve (Estate)',
    abv: '',
    color: 'Red',
    type: 'Marechal Foch',
    vineyard_id: 2
  },
  {
    name: 'Chambourcin',
    abv: '',
    color: 'Red',
    type: 'Chambourcin',
    vineyard_id: 3
  },
  {
    name: 'Rose',
    abv: '',
    color: 'Rose',
    type: 'Cabernet Franc',
    vineyard_id: 3
  },
  {
    name: 'Strawberry-Rhubarb',
    abv: '',
    color: 'Rose',
    type: 'Strawberry-Rhubarb',
    vineyard_id: 3
  },
  {
    name: 'Antler Hill Chardonnay Carneros',
    abv: '',
    color: 'White',
    type: 'Chardonnay',
    vineyard_id: 4
  },
  {
    name: 'Antler Hill Pinot Noir Russian River Valley 2015',
    abv: '',
    color: 'Red',
    type: 'Pinot Noir',
    vineyard_id: 4
  },
  {
    name: 'Antler Hill Cabernet Sauvignon Napa Valley 2015',
    abv: '',
    color: 'Red',
    type: 'Cabernet Sauvignon',
    vineyard_id: 4
  }
];

app.get('/', (request, response) => {
  response.send('Welcome to NC Vineyards!');
});

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

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`);
});