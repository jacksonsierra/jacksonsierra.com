var db = require('./db.js');

module.exports = {
  findApps: function(req, res) {
    var query = {};

    db.apps.find(query).toArray(function(err, docs) {
      if(err) res.status(404).send(err);

      res.status(200).send(docs);
      return;
    });
    return;
  }
};
