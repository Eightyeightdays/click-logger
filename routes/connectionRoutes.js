const express = require("express");
const router = express.Router();
const connectionController = require("../controllers/connectionController.js");

router.post("/login", connectionController.login);     // ADD MIDDLEWARE

module.exports = router;