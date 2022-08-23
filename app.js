const express = require('express');
var http = require('http');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');

var app = express();
var server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: '*'
}));

app.get('/data',(req,response) => {
  const connection = mysql.createConnection({
    host:process.env["DB.HOST"],
    user:process.env["DB.USER"],
    password:process.env["DB.PASS"],
    dbname:process.env["DB.DBNAME"],
    ssl: {
      "rejectUnauthorized":true
    }
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  const sql = `SELECT * FROM spotify LIMIT 10`

  connection.query(sql, (error, results) => {
    if (error) {
      return console.error(error.message);
    }
    response.send(results);
    console.log(results);
  });
});

server.listen(3000,(port) => {
  console.log('Listening on port ' + server.address().port);

});

module.exports = app;