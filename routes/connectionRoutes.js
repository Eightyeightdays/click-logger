const express = require("express");
const router = express.Router();
const connectionController = require("../controllers/connectionController.js");
const auth = require("../middleware/auth.js")

router.post("/login", connectionController.login);     
// ADD MIDDLEWARE for update applications

module.exports = router;