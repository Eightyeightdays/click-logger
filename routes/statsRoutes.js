const express = require("express");
const router = express.Router();
const statsController = require("../controllers/statsController.js");

router.get("/stats", statsController.total);

module.exports = router;