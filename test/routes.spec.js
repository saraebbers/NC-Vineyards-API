const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('Client Routes', () => {
  it('should return the homepage with text', done => {
    chai.request(server)
    .get('/')
    .end((err, response) => {
      response.should.have.status(200);
      response.should.be.html;
      response.res.text.should.equal('NC Vineyards');
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

    it('should return a specific vineyard by id', (done) => {
      chai.request(server)
      .get('/api/v1/vineyards/10')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.should.be.a('object');
        response.body.id.should.equal(10);
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
});

describe('API Routes for Wines', () => {
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
      .get('/api/v1/wines/26')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.should.be.a('object');
        response.body.id.should.equal(26);
        response.body.vineyard_id.should.equal(9)
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
});

