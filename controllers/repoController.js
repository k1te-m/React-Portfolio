const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    console.log(req.query);
    db.Repo.find(req.query)
      .then((repos) => res.json(repos))
      .catch((error) => res.status(422).json(error));
  },
};
