const express = require("express");
const router = express.Router();
const statsController = require("../controllers/statsController.js");

router.get("/link1_stats", statsController.getAll1);
router.get("/link2_stats", statsController.getAll2);
router.get("/link3_stats", statsController.getAll3);
router.get("/link4_stats", statsController.getAll4);
router.get("/link5_stats", statsController.getAll5);
router.get("/link6_stats", statsController.getAll6);

module.exports = router;