const express = require("express");
const router = express.Router();
const {
  createProcess,
  singleProcess,
  allProcess,
} = require("../controllers/processController");

router.post("/",createProcess);
router.get("/", allProcess);
router.get("/:id", singleProcess);

module.exports = router;