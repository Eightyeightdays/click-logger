const express = require("express");
const router = express.Router();
const applicationStatsController = require("../controllers/applicationStatsController.js");
const auth = require("../middleware/auth.js")
    
// router.put("/update", auth, applicationStatsController.update); // DELETE
// router.get("/app-stats", applicationStatsController.getStats); // DELETE
router.get("/all-stats", applicationStatsController.getAll);
router.post("/update", auth, applicationStatsController.add);


module.exports = router;