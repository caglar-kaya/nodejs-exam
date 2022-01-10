import express from 'express';
import {
  getMovies,
  getMovie,
  createMovie,
  deleteMovie,
} from '../controllers/controllers.js';

const router = express.Router();

// all routes in here are starting with /movies

router.get('/', getMovies);

router.get('/:id', getMovie);

router.post('/', createMovie);

router.delete('/:id', deleteMovie);

export default router;
