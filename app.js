const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/data',(req,response) => {
  //Add simple mysql or mysql2 example
  response.send("asd");
});

app.listen(8000,() => {
});


module.exports = app;