const express = require('express');
const http = require('http');
const mysql = require('mysql2');
const cors = require('cors');
const {response} = require("express");
const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use(cors({
  origin: '*'
}));

const connection = mysql.createConnection({
  host: process.env["DB_HOST"],
  user: process.env["DB_USER"],
  password: process.env["DB_PASS"],
  database: process.env["DB_NAME"],
  ssl: {
    "rejectUnauthorized": this.host === "localhost"
  }
})

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//Hello World
app.get('/', (req, res) => {
  res.send('Hello ITA!')
});

//Getting 10 first songs
app.get('/test',(req, response) => {
  const sql = `SELECT * FROM spotify LIMIT 10`;
  connection.query(sql, (err,rows) => {
    response.send(rows);
  });
});

//Get all by artist name
app.get('/artist/:artistname', (req, res) => {
  const artistParameter = req.params.artistname;
  const sql = 'SELECT * FROM `spotify` WHERE `artist` = ?';
  connection.execute(sql,[artistParameter], (err, results) => {
    res.send(results);
  })
});

app.post('/post', (req, res,) => {
  const json = req;
  console.log(json);
  res.redirect(200,'/test');
});

server.listen(3000,(port) => {
  console.log('Listening on port ' + server.address().port);
});

module.exports = app;