const express = require("express");
const router = express.Router();
const {
  createAnalyics,
  allAnalyics,
} = require("../controllers/analyicsController");

router.post("/", createAnalyics);
router.get("/", allAnalyics);

module.exports = router;
