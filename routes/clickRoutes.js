const express = require("express");
const router = express.Router();
const clickController = require("../controllers/clickController.js");

router.get("/link1", clickController.handleClicks);     // Record click from 1st link
router.get("/link2", clickController.handleClicks); 
router.get("/link3", clickController.handleClicks);
router.get("/link4", clickController.handleClicks);
router.get("/link5", clickController.handleClicks);
router.get("/link6", clickController.handleClicks);

module.exports = router;