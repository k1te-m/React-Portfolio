const router = require("express").Router();
const portfolioRoutes = require("./repos");
const messageRoutes = require("./message");

// api routes
router.use("/repos", portfolioRoutes);
router.use("/messages", messageRoutes);

module.exports = router;
