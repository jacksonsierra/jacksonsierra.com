/*
    file: server.js
    - - - - - - - - - - - 
    Express app that handles
    routing for jacksonsierra.com
 */
var http = require('http')
  // , https = require('https')
  , express = require('express')
  , bodyParser = require('body-parser')
  , images = require('./db/images.js')
  , blogPosts = require('./db/blog_posts.js')
  , apps = require('./db/apps.js');

var app = express();
var server = http.createServer(app);
  // , serverSSL = https.createServer(app);

app.use(bodyParser.json());
app.use(express.static('./client/dist'));
app.set('title', 'Jackson Sierra');

app.get('/^(?!\/api\/)[\\s\\S]*/', function(req, res) {
  res.sendFile('index.html', {root: './client/dist'});
});

app.get('/api/images*', images.findImages);

app.get('/api/blog_posts', blogPosts.findBlogPosts);

app.get('/api/apps', apps.findApps);

server.listen(8000, 'localhost', function() {
  console.log('Listening on localhost:8000');
});
