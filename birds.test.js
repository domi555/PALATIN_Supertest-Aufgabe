const supertest = require('supertest');
const app = require('./birds_project/server/app');

describe('Test "birds" REST Service', () => {
  it('should return object with property commonName "Swift Parrot"', async () => {
    const request = supertest.agent(app);
    const res = await request.get('/birds');
    expect(res.status).toBe(200);

    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ commonName: 'Swift Parrot' }),
      ]),
    );
  });
});
