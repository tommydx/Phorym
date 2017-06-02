const express = require("express");
const router = express.Router();

// ROUTER middleware (router.use)
router.use("/", require('./controllers/home'))
router.use("/posts", require("./controllers/posts/controller.js"));
// router.use("comments", require("./controllers/"));
// Export module to reuse throughout app
module.exports = router;
