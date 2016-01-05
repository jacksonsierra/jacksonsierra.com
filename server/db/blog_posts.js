/*
    file: db/blog_posts.js
    - - - - - - - - - - -
    Helper functions for querying `blog_posts`
    collection in MongoDB instance
 */

var db = require('./db.js')
  , url = require('url')
  , moment = require('moment');

var cleanDate = function(date) {
  return moment(date).format('dddd, MMM Do YYYY');
};

module.exports = {
  findBlogPosts: function(req, res) {
    var query = {};

    db.blog_posts.find(query).toArray(function(err, docs) {
      if(err) res.status(404).send(err);

      docs.forEach(function(element) {
        var dateString = element.date;

        element.date = new Date(dateString);
        element.dateFormatted = cleanDate(dateString);
        return;
      });

      res.status(200).send(docs);
      return;
    });
    return;
  }
};
