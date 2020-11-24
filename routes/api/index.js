const router = require("express").Router();
const portfolioRoutes = require("./portfolio");

// generic routes
router.use("/portfolio", portfolioRoutes);

module.exports = router;
