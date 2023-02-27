const express = require("express");
const router = express.Router();
const clickController = require("../controllers/clickController.js");

router.get("/test", clickController.click);     // Record click from 1st link

module.exports = router;