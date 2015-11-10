/*
    file: server.js
    - - - - - - - - - - - 
    Express app that handles
    routing for jacksonsierra.com
 */
var http = require('http')
  , https = require('https')
  , express = require('express')
  , url = require('url')
  , bodyParser = require('body-parser');

var app = express();
var server = http.createServer(app);
  // , serverSSL = https.createServer(app);

app.use(express.static('./client/dist'));
app.set('title', 'Jackson Sierra');

app.get('/', function(req, res) {
  res.end();
});

server.listen(8000, 'localhost', function() {
  console.log('Listening on localhost:8000');
});