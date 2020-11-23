const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Repo.find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(error => res.status(422).json(error))
    }
};