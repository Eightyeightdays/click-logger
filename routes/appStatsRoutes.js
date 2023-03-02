const express = require("express");
const router = express.Router();
const applicationStatsController = require("../controllers/applicationStatsController.js");
const auth = require("../middleware/auth.js")
    
router.put("/update", auth, applicationStatsController.update);
router.get("/app-stats", applicationStatsController.getStats);

module.exports = router;