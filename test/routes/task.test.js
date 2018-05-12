import request from 'supertest';
import app from '../../src'

// describe('weather routes', () => {
//     describe ('GET /weather', () => {
//         it ('returns tasks when route is hit', async () => {
//             const result = request(app).get('/weather');
//             e.to.not.be.error;
//         });
//     })
// });


describe('GET /weather', function() {
    it('respond with json', function(done) {
      request(app)
        .get('/weather')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

  describe('GET /weather', function() {
    it('respond with json', function(done) {
      request(app)
        .get('/weather')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/, done);
    });
  });


describe('GET /weather/london', function() {
    it('respond with json', function(done) {
      request(app)
        .get('/weather')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

  describe('GET /weather/london', function() {
    it('respond with json', function(done) {
      request(app)
        .get('/weather')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/, done);
    });
  });

  describe('GET /weather/forecast', function() {
    it('respond with json', function(done) {
      request(app)
        .get('/weather')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

  describe('GET /weather/forecast', function() {
    it('respond with json', function(done) {
      request(app)
        .get('/weather')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/, done);
    });
  });


