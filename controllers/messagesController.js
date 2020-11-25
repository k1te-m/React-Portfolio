const db = require("../models");

module.exports = {
  sendMessage: function (req, res) {
    console.log(req.body);
    db.Message.create(req.body)
      .then((results) => {
        res.json(results);
        console.log("Message sent...");
      })
      .catch((error) => console.log(error));
  },
};
