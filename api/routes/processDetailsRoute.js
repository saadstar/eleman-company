const express = require("express");
const router = express.Router();
const {
  createProcessDetails,
  allProcessDetails,
  deleteProcessDetail,
  processDetailsWithType,
} = require("../controllers/processDetailsController");

router.post("/", createProcessDetails);
router.get("/:processId", allProcessDetails);
router.get("/:processId/:type", processDetailsWithType);
router.delete("/:id", deleteProcessDetail);

module.exports = router;