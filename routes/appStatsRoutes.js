const express = require("express");
const router = express.Router();
const applicationStatsController = require("../controllers/applicationStatsController.js");
const auth = require("../middleware/auth.js")
    
router.get("/all-stats", applicationStatsController.getAll);
router.post("/update", auth, applicationStatsController.add);

module.exports = router;