import { v4 as uuidv4 } from 'uuid';

let movies = [
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
];

export const getMovies = (req, res) => {
  res.status(200);
  res.send(movies);
};

export const getMovie = (req, res) => {
  const { id } = req.params;
  const foundMovie = movies.find((movie) => movie.id === id);
  if (foundMovie) {
    res.status(200);
    res.send(foundMovie);
  } else {
    res.status(404);
    res.send(`The movie with id ${id} not found in the database.`);
  }
};

export const createMovie = (req, res) => {
  const movie = req.body;
  const { title, director, release_date } = movie;
  if (!title) {
    res.status(400);
    res.send(`You should enter a title for your movie!`);
    return;
  }
  if (!director) {
    res.status(400);
    res.send(`You should enter a director for your movie!`);
    return;
  }
  if (!release_date) {
    res.status(400);
    res.send(`You should enter a release date for your movie!`);
    return;
  }
  const movieWithId = {
    id: uuidv4(),
    title: title,
    director: director,
    release_date: release_date,
  };
  movies.push(movieWithId);
  res.status(200);
  res.send(`Movie with the id ${movieWithId.id} added to the database!`);
};

export const deleteMovie = (req, res) => {
  const { id } = req.params;
  const movieExist = movies.some((movie) => movie.id === id);
  if (movieExist) {
    movies = movies.filter((movie) => movie.id !== id);
    res.status(200);
    res.send(`Movie with the id ${id} deleted from the database.`);
  } else {
    res.status(404);
    res.send(`The movie with id ${id} not found in the database.`);
  }
};
