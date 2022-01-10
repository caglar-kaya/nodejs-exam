import app from './app.js';

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server running on port: http://localhost:${PORT}/`);
});
