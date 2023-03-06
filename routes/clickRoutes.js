const express = require("express");
const router = express.Router();
const clickController = require("../controllers/clickController.js");
const logId = require("../middleware/log-id");

router.get("/link1", logId, clickController.handleClicks);     // Record click from 1st link
router.get("/link2", logId, clickController.handleClicks); 
router.get("/link3", logId, clickController.handleClicks);
router.get("/link4", logId, clickController.handleClicks);
router.get("/link5", logId, clickController.handleClicks);
router.get("/link6", logId, clickController.handleClicks);

module.exports = router;