const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.static('server/public'));

/** ------ IMPORT THE ROUTER FILES ------ **/
// TODO - Import the router files here:

// TODO - Make sure to move these bits of data
//        into their corresponding router files!
const books = [
  {
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin'
  },
  {
    title: 'The Swan',
    author: 'Mary Oliver'
  }
];
const movies = [
  {
    title: 'Lady Bird',
    director: 'Greta Gerwig'
  },
  {
    title: 'Everything Everywhere All at Once',
    director: 'Daniel Kwan and Daniel Scheinert'
  }
];

/** ---------- EXPRESS ROUTES ---------- **/
// TODO - Move these routes to their own modules!
app.get('/books', (req, res) => {
    console.log('GET /books received a request!')
    res.send(books);
});

app.post('/books', (req, res) => {
    console.log('POST /books received a request!')
    console.log('req.body:', req.body)
  
    books.push(req.body);
    res.sendStatus(200);
});

app.get('/movies', (req, res) => {
  console.log('GET /movies received a request!')
  res.send(movies);
});

app.post('/movies', (req, res) => {
  console.log('POST /movies received a request!')
  console.log('req.body:', req.body)
  
  movies.push(req.body);
  res.sendStatus(200);
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
