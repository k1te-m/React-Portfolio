const router = require("express").Router();
const repoController = require("../../controllers/repoController");

router
    .route("/")
    .get(repoController.findAll);

module.exports = router;