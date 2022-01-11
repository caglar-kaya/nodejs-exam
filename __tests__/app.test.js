import app from '../app.js';
import supertest from 'supertest';

const request = supertest(app);

describe('GET /movies', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request.get('/movies');
    expect(response.statusCode).toBe(200);
  });
  it('should respond with an array', async () => {
    const response = await request.get('/movies');
    expect(response.body).toEqual([
      {
        id: '1',
        title: 'Inception',
        director: 'Christopher Nolan',
        release_date: '2010-07-16',
      },
      {
        id: '2',
        title: 'The Irishman',
        director: 'Martin Scorsese',
        release_date: '2019-09-27',
      },
    ]);
  });
  it('should respond with a 200 status code', async () => {
    const response = await request.get('/movies/1');
    expect(response.statusCode).toBe(200);
  });
  it('should respond with an object', async () => {
    const response = await request.get('/movies/1');
    expect(response.body).toEqual({
      id: '1',
      title: 'Inception',
      director: 'Christopher Nolan',
      release_date: '2010-07-16',
    });
  });
  it('should respond with a 404 status code', async () => {
    const response = await request.get('/movies/5');
    expect(response.statusCode).toBe(404);
  });
  it('should respond with a message', async () => {
    const response = await request.get('/movies/5');
    expect(response.text).toBe(
      'The movie with id 5 not found in the database.',
    );
  });
});

describe('POST /movies', () => {
  it('should respond with a 201 status code', async () => {
    const response = await request.post('/movies').send({
      title: 'Web Developer',
      director: 'Caglar Kaya',
      release_date: '2022-01-10',
      age: '33',
    });
    expect(response.statusCode).toBe(201);
  });
  it('should respond with a message', async () => {
    const response = await request.post('/movies').send({
      title: 'Web Developer',
      director: 'Caglar Kaya',
      release_date: '2022-01-10',
      age: '33',
    });
    expect(response.text.includes('Movie with the id')).toBe(true);
  });
  it('should respond with a 400 status code', async () => {
    const response = await request.post('/movies').send({
      director: 'Caglar Kaya',
      release_date: '2022-01-10',
      age: '33',
    });
    expect(response.statusCode).toBe(400);
  });
  it('should respond with a message', async () => {
    const response = await request.post('/movies').send({
      director: 'Caglar Kaya',
      release_date: '2022-01-10',
      age: '33',
    });
    expect(response.text).toBe('You should enter a title for your movie!');
  });
  it('should respond with a 400 status code', async () => {
    const response = await request.post('/movies').send({
      title: 'Web Developer',
      release_date: '2022-01-10',
      age: '33',
    });
    expect(response.statusCode).toBe(400);
  });
  it('should respond with a message', async () => {
    const response = await request.post('/movies').send({
      title: 'Web Developer',
      release_date: '2022-01-10',
      age: '33',
    });
    expect(response.text).toBe('You should enter a director for your movie!');
  });
  it('should respond with a 400 status code', async () => {
    const response = await request.post('/movies').send({
      title: 'Web Developer',
      director: 'Caglar Kaya',
      age: '33',
    });
    expect(response.statusCode).toBe(400);
  });
  it('should respond with a message', async () => {
    const response = await request.post('/movies').send({
      title: 'Web Developer',
      director: 'Caglar Kaya',
      age: '33',
    });
    expect(response.text).toBe(
      'You should enter a release date for your movie!',
    );
  });
});

describe('DELETE /movies', () => {
  it('should respond with a 200 status code and a message', async () => {
    const response = await request.delete('/movies/1');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      'Movie with the id 1 deleted from the database.',
    );
  });
  it('should respond with a 404 status code', async () => {
    const response = await request.delete('/movies/5');
    expect(response.statusCode).toBe(404);
  });
  it('should respond with a message', async () => {
    const response = await request.delete('/movies/5');
    expect(response.text).toBe(
      'The movie with id 5 not found in the database.',
    );
  });
  it('should respond with a 404 status code', async () => {
    const response = await request.delete('/movies');
    expect(response.statusCode).toBe(404);
  });
});
