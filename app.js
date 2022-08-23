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
  //Add simple mysql or mysql2 example
  response.json("Data from server!");
});


server.listen(3000,(port) => {
  console.log('Listening on port ' + server.address().port);
});


module.exports = app;