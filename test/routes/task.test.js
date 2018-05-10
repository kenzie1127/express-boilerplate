import request from 'supertest';
import app from '../../src'

describe('weather routes', () => {
    describe ('GET /weather', () => {
        it ('returns tasks when route is hit', async () => {
            const result = request(app).get('/weather');
            expect(result.status).to.equal(200);
        });
    })
});
