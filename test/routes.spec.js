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
    
  })
});

