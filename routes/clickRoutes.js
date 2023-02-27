const express = require("express");
const router = express.Router();
const clickController = require("../controllers/clickController.js");

router.get("/link1", clickController.click);     // Record click from 1st link
router.get("/link2", clickController.click2); 
router.get("/link3", clickController.click3);
router.get("/link4", clickController.click4);
router.get("/link5", clickController.click5);
router.get("/link6", clickController.click6);

module.exports = router;