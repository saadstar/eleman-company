const express = require("express");
const router = express.Router();
const {
  createSaveItem,
  saveItems,
  singleSaveItem,
  deleteSaveItem,
} = require("../controllers/saveController");

// @POST create new save item     
router.post("/", createSaveItem);

// @GET fetch all save items   
router.get("/", saveItems);

// @GET fetch single save item     by Id
router.get("/:id", singleSaveItem)

// @DELETE a single save item     by Id
router.delete("/:id", deleteSaveItem);


module.exports = router;