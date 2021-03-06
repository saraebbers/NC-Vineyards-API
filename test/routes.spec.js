const configuration = require('../knexfile.js')['testing'];
const database = require('knex')(configuration)
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');
chai.use(chaiHttp);

before(done => {
  database.migrate.latest()
    .then(() => done())
})

describe('Client Routes', () => {
  beforeEach(done => {
    database.migrate.rollback()
      .then(() => database.migrate.latest())
      .then(() => database.seed.run())
      .then(() => done())
  })
  it('should return the homepage with text', done => {
    chai.request(server)
      .get('/')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.should.be.a('object');
        response.body.should.have.property('message')
        response.body.message.should.equal('NC Vineyards');
        done();
      })
  })

  it('should return a 404 error for a route that does not exist', (done) => {
    chai.request(server)
      .get('/IwantTOGoHome')
      .end((err, response) => {
        response.should.have.status(404);
        done()
      })
  })

});

describe('API Routes for vineyards', () => {
  beforeEach(done => {
    database.migrate.rollback()
      .then(() => database.migrate.latest())
      .then(() => database.seed.run())
      .then(() => done())
  })
  
  describe('GET /api/v1/vineyards', () => {
    it('should return all vineyards', (done) => {
      chai.request(server)
        .get('/api/v1/vineyards')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.length.should.equal(6);
          response.body[0].should.have.property('name');
          response.body[0].should.have.property('region');
          response.body[0].should.have.property('website');
          response.body[0].should.have.property('address');
          response.body[0].should.have.property('phone');
          response.body[0].should.have.property('id');
          response.body[0].name.should.be.a('string');
          response.body[0].region.should.be.a('string');
          response.body[0].website.should.be.a('string');
          response.body[0].address.should.be.a('string');
          response.body[0].phone.should.be.a('string');
          response.body[0].id.should.be.a('number');
          done()
        })
    })

    it('should return a specific region if annotated in the query string', (done) => {
      chai.request(server)
        .get('/api/v1/vineyards?region=mountains')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.length.should.equal(2);
          response.body[0].should.have.property('name');
          response.body[0].should.have.property('region');
          response.body[0].should.have.property('website');
          response.body[0].should.have.property('address');
          response.body[0].should.have.property('phone');
          response.body[0].should.have.property('id');
          response.body[0].name.should.be.a('string');
          response.body[0].region.should.be.a('string');
          response.body[0].region.should.equal('Mountains');
          response.body[0].website.should.be.a('string');
          response.body[0].address.should.be.a('string');
          response.body[0].phone.should.be.a('string');
          response.body[0].id.should.be.a('number');
          done()
        })
    })

    it('should return a specific vineyard by name if annotated in the query string', (done) => {
      chai.request(server)
        .get('/api/v1/vineyards?name=a%20secret%20garden%20winery')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.should.be.a('object');
          response.body.should.be.a('array');
          response.body.length.should.equal(1);
          response.body[0].should.have.property('name');
          response.body[0].should.have.property('region');
          response.body[0].should.have.property('website');
          response.body[0].should.have.property('address');
          response.body[0].should.have.property('phone');
          response.body[0].should.have.property('id');
          response.body[0].name.should.be.a('string');
          response.body[0].name.should.equal('A Secret Garden Winery');
          response.body[0].region.should.be.a('string');
          response.body[0].website.should.be.a('string');
          response.body[0].address.should.be.a('string');
          response.body[0].phone.should.be.a('string');
          response.body[0].id.should.be.a('number');
          done()
        })
    })

    it('should return an error message if a search query is annotated but not found', (done) => {
      chai.request(server)
        .get('/api/v1/vineyards?region=desert')
        .end((err, response) => {
          response.should.have.status(404);
          response.should.be.json;
          response.should.be.a('object');
          response.body.should.have.property('message');
          response.body.message.should.equal(`Could not find any vineyards matching your query.`)
          done()
        })
    })

    it('should return an error message if a search query parameter is invalid', (done) => {
      chai.request(server)
        .get('/api/v1/vineyards?type=malbec')
        .end((err, response) => {
          response.should.have.status(400);
          response.should.be.json;
          response.should.be.a('object');
          response.body.should.have.property('message');
          response.body.message.should.equal(`Invalid query parameter(s). You may search by "name" or "region" only.`)
          done()
        })
    })

    it('should return a specific vineyard by id', (done) => {
      chai.request(server)
        .get(`/api/v1/vineyards/1`)
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.should.be.a('object');
          response.body.id.should.equal(1);
          response.body.should.have.property('name');
          response.body.should.have.property('region');
          response.body.should.have.property('website');
          response.body.should.have.property('address');
          response.body.should.have.property('phone');
          response.body.should.have.property('id');
          response.body.name.should.be.a('string');
          response.body.region.should.be.a('string');
          response.body.website.should.be.a('string');
          response.body.address.should.be.a('string');
          response.body.phone.should.be.a('string');
          response.body.id.should.be.a('number');
          done()
        })
    })

    it('should return a 404 error if passed an id that does not exist', (done) => {
      chai.request(server)
        .get('/api/v1/vineyards/1001')
        .end((err, response) => {
          response.should.have.status(404);
          response.should.be.json;
          response.should.be.a('object');
          response.body.should.have.property('message');
          response.body.message.should.equal('This id does not match an Id currently in the database, please resubmit request with correct id');
          done()
        })
    })
  })

  describe('POST /api/v1/vineyards', () => {
    it('should add a new vineyard if all of the required params are present', (done) => {
      chai.request(server)
        .post('/api/v1/vineyards')
        .send({
          name: 'Happy Camper Vineyard',
          address: '123 Street Rd, NC',
          website: 'www.WeAreSoHappy',
          phone: '(555) 867-5309',
          region: 'Piedmont'
        })
        .end((err, response) => {
          response.should.have.status(201);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.id.should.equal(7);
          response.body.should.have.property('id');
          response.body.id.should.be.a('number');
          done()
        })
    })

    it('should return a status code of 422 if one of the required params is not present', (done) => {
      chai.request(server)
        .post('/api/v1/vineyards')
        .send({
          name: 'Happy Camper Vineyard',
          address: '123 Street Rd, NC',
          website: 'www.WeAreSoHappy',
          phone: '(555) 867-5309'
        })
        .end((err, response) => {
          response.should.have.status(422);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('message');
          response.body.message.should.equal('Expected Format: { name: <string>, address: <string>, website: <string>, phone: <string of (xxx) xxx-xxxx>, region: <string of Coast, Mountain, or Peidmont>  }.  You are missing a "region" property.');
          done()
        })
    })
  })

  describe('PUT /api/v1/vineyards', () => {
    it('should update the values associated with a given vineyard without altering the id or deleting information that is not meant to be altered', (done) => {
      chai.request(server)
        .put('/api/v1/vineyards/1')
        .send({ 
          name: 'Harrison Laughs Vineyard',
          phone: '(555) 555-5432',
        })
        .end((err, response) => {
          response.should.have.status(201);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.id.should.equal(1);
          response.body.should.have.property('id');
          response.body.id.should.be.a('number');
          done()
        })
    })

    it('should return a 404 error if passed an id that does not exist', (done) => {
      chai.request(server)
        .put('/api/v1/vineyards/3984')
        .send({ 
          name: 'Harrison Laughs Vineyard',
          phone: '(555) 555-5432',
        })
        .end((err, response) => {
          response.should.have.status(404);
          response.should.be.json;
          response.should.be.a('object');
          response.body.should.have.property('message');
          response.body.message.should.equal('This id does not match an Id currently in the database, unable to update');
          done()
        })
    })
  })

  describe('DELETE /api/v1/vineyards', () => {
    it('should return a status of 200 if vineyard was successfully deleted', (done) => {
      chai.request(server)
        .delete('/api/v1/vineyards/1')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.should.be.a('object')
          response.body.should.equal('Successfully deleted vineyard with the id of 1 as well as wines with the vineyard_id of 1')
          done()
        })
    })

    it('should return a status of 404 if vineyard for deletion is not found', (done) => {
      chai.request(server)
        .delete('/api/v1/vineyards/8675309')
        .end((err, response) => {
          response.should.have.status(404);
          response.should.be.json;
          response.should.be.a('object')
          response.body.should.equal('Error on deletion: cannot find resource specified (vineyard id: 8675309). Check the id specified.')
          done()
        })
    })
  })
});

describe('API Routes for Wines', () => {
  beforeEach(done => {
    database.migrate.rollback()
      .then(() => database.migrate.latest())
      .then(() => database.seed.run())
      .then(() => done())
  })
  describe('GET /api/v1/wines', () => {
    it('should return all wines', (done) => {
      chai.request(server)
        .get('/api/v1/wines')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.length.should.equal(18);
          response.body[0].should.have.property('name');
          response.body[0].should.have.property('type');
          response.body[0].should.have.property('vineyard_id');
          response.body[0].should.have.property('color');
          response.body[0].should.have.property('id');
          response.body[0].name.should.be.a('string');
          response.body[0].type.should.be.a('string');
          response.body[0].vineyard_id.should.be.a('number');
          response.body[0].color.should.be.a('string');
          done()
        })
    })

    it('should return a specific wine by id', (done) => {
      chai.request(server)
        .get('/api/v1/wines/1')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.should.be.a('object');
          response.body.id.should.equal(1);
          response.body.should.have.property('name');
          response.body.should.have.property('type');
          response.body.should.have.property('vineyard_id');
          response.body.should.have.property('color');
          response.body.should.have.property('id');
          response.body.name.should.be.a('string');
          response.body.type.should.be.a('string');
          response.body.vineyard_id.should.be.a('number');
          response.body.color.should.be.a('string');
          done()
        })
    })

    it('should return a 404 error if passed an id that does not exist', (done) => {
      chai.request(server)
        .get('/api/v1/wines/2002')
        .end((err, response) => {
          response.should.have.status(404);
          response.should.be.json;
          response.should.be.a('object');
          response.body.should.have.property('message');
          response.body.message.should.equal('This id does not match an Id currently in the database, please resubmit request with correct id');
          done()
        })
    })
  })

  describe('POST /api/v1/wines', () => {
    it('should add a new wine if all of the required params are present', (done) => {
      chai.request(server)
        .post('/api/v1/wines')
        .send({
          name: 'Carolina Blue Blueberry Special',
          type: 'Sweet',
          vineyard_id: 1,
          color: 'blue'
        })
        .end((err, response) => {
          response.should.have.status(201);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.id.should.equal(19);
          response.body.should.have.property('id');
          response.body.id.should.be.a('number');
          done()
        })
    })

    it('should return a status code of 422 if one of the required params is not present', (done) => {
      chai.request(server)
        .post('/api/v1/wines')
        .send({
          name: 'Carolina Blue Blueberry Special',
          color: 'blue',
          type: 'Sweet'
        })
        .end((err, response) => {
          response.should.have.status(422);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('message');
          response.body.message.should.equal('Expected Format: { name: <string>, type: <string>, color: <string> vineyard_id: <number>.  You are missing a "vineyard_id" property.');
          done()
        })
    })
  })

  describe('PUT /api/v1/wines', () => {
    it('should update the values associated with a given wine without altering the id or deleting information that is not meant to be altered', (done) => {
      chai.request(server)
        .put('/api/v1/wines/1')
        .send({ 
          name: 'Carolina Red Strawberry Special',
          type: 'So Sweet you can only have 1',
          color: 'Pink'
        })
        .end((err, response) => {
          response.should.have.status(201);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.id.should.equal(1);
          response.body.should.have.property('id');
          response.body.id.should.be.a('number');
          done()
        })
    })

    it('should return a 422 error if passed an id that does not exist', (done) => {
      chai.request(server)
        .put('/api/v1/wines/3984')
        .send({ 
          name: 'Carolina Red Strawberry Special',
          type: 'So Sweet you can only have 1',
          color: 'Pink'
        })
        .end((err, response) => {
          response.should.have.status(422);
          response.should.be.json;
          response.should.be.a('object');
          response.body.should.have.property('message');
          response.body.message.should.equal('This id does not match an Id currently in the database, unable to update');
          done()
        })
    })
  })

  describe('DELETE /api/v1/wines', () => {
    it('should return a status of 200 if wine was successfully deleted', (done) => {
      chai.request(server)
        .delete('/api/v1/wines/1')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.should.be.a('object')
          response.body.should.equal('Successfully deleted wine with the id of 1')
          done()
        })
    })

    it('should return a status of 404 if wine for deletion is not found', (done) => {
      chai.request(server)
        .delete('/api/v1/wines/8675309')
        .end((err, response) => {
          response.should.have.status(404);
          response.should.be.json;
          response.should.be.a('object')
          response.body.should.equal('Error on deletion: cannot find resource specified (wine id: 8675309). Check the id specified.')
          done()
        })
    })
  })
});

