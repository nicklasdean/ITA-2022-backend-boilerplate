const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const app = express();
const server = http.createServer(app);

const connection = require('./database/config');
const songRoute = require('./routers/songs');

app.use(cors({origin: '*'}));

app.use(express.json());
app.use('/',songRoute);

server.listen(3000,(port) => {
  console.log('Listening on port ' + server.address().port);
});

module.exports = app;