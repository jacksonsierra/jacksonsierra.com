/*
    file: db/images.js
    - - - - - - - - - - -
    Helper functions for querying `images`
    collection in MongoDB instance
 */

var db = require('./db.js')
  , url = require('url');

module.exports = {
  findImages: function(req, res) {
    var page = url.parse(req.originalUrl, true).query.page
      , query = {
          'active': true
        };

    if(page !== 'all') query.page = page;

    db.images.find(query).sort({'order': 1}).toArray(function(err, docs) {
      if(err) res.status(404).send(err);

      res.status(200).send(docs);
      return;
    });
    return;
  }
};
