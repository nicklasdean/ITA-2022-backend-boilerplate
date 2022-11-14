const express = require('express');
const http = require('http');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello Worldasdæisdouhdsohuadsadspiads!')
});

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