/*
    file: db.js
    - - - - - - - - - - - - - - - - 
    Mongo DB instance for storing site's
    content
 */

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/jacksonsierra', function(err, db) {
  if(err) throw err;

  module.exports.images = db.collection('images');
  module.exports.apps = db.collection('apps');
  module.exports.blog_posts = db.collection('blog_posts');
});
