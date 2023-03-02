const express = require("express");
const router = express.Router();
const connectionController = require("../controllers/connectionController.js");
const auth = require("../middleware/auth.js")

router.post("/login", connectionController.login);     
router.put("/update", auth, connectionController.update)

module.exports = router;