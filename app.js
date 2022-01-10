import express from 'express';
import bodyParser from 'body-parser';

import moviesRoutes from './routes/movies.js';

const app = express();

app.use(bodyParser.json());

app.use('/movies', moviesRoutes);

app.get('/', (req, res) => res.send('You are at the homepage'));

export default app;
