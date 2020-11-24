const router = require("express").Router();
const portfolioRoutes = require("./repos");

// repo routes
router.use("/repos", portfolioRoutes);

module.exports = router;
