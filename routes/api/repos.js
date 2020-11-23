const router = require("express").Router();
const repoController = require("../../controllers/repoController");

router
    .router("/")
    .get(repoController.findAll);

module.exports = router;