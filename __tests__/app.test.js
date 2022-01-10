import app from '../app.js';
import supertest from 'supertest';

const request = supertest(app);

describe('GET /movies', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request.get('/movies');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /movies/1', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request.get('/movies/1');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /movies/5', () => {
  it('should respond with a 404 status code', async () => {
    const response = await request.get('/movies/5');
    expect(response.statusCode).toBe(404);
  });
});

describe('POST /movies', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request.post('/movies').send({
      title: 'Web Developer',
      director: 'Caglar Kaya',
      release_date: '2022-01-10',
      age: '33',
    });
    expect(response.statusCode).toBe(200);
  });
});

describe('POST /movies', () => {
  it('should respond with a 400 status code', async () => {
    const response = await request.post('/movies').send({
      director: 'Caglar Kaya',
      release_date: '2022-01-10',
      age: '33',
    });
    expect(response.statusCode).toBe(400);
  });
});

describe('POST /movies', () => {
  it('should respond with a 400 status code', async () => {
    const response = await request.post('/movies').send({
      title: 'Web Developer',
      release_date: '2022-01-10',
      age: '33',
    });
    expect(response.statusCode).toBe(400);
  });
});

describe('POST /movies', () => {
  it('should respond with a 400 status code', async () => {
    const response = await request.post('/movies').send({
      title: 'Web Developer',
      director: 'Caglar Kaya',
      age: '33',
    });
    expect(response.statusCode).toBe(400);
  });
});

describe('DELETE /movies/1', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request.delete('/movies/1');
    expect(response.statusCode).toBe(200);
  });
});

describe('DELETE /movies/5', () => {
  it('should respond with a 404 status code', async () => {
    const response = await request.delete('/movies/5');
    expect(response.statusCode).toBe(404);
  });
});

describe('DELETE /movies', () => {
  it('should respond with a 404 status code', async () => {
    const response = await request.delete('/movies');
    expect(response.statusCode).toBe(404);
  });
});
