const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const app = express();
const server = http.createServer(app);

const connection = require('./database/config');

app.use(express.json());

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello ITA!')
});

app.get('/data',(req, response) => {
  const sql = `SELECT * FROM spotify LIMIT 10`;
  connection.query(sql, (err,rows) => {
    response.send(rows);
  });
});

server.listen(3000,(port) => {
  console.log('Listening on port ' + server.address().port);
});

module.exports = app;