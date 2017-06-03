const express = require("express");
const router = express.Router();

// ROUTER middleware (router.use)
router.use("/", require("./controllers/posts"));

// Export module to reuse throughout app
module.exports = router;
