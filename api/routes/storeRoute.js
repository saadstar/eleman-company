const express = require("express");
const router = express.Router();
const { createStore, storeItems, deleteStoreItem, editStoreItem, singleStoreItem } = require("../controllers/storeController");


// @POST create new store item 
router.post("/", createStore);

// @GET fetch all store items
router.get("/", storeItems);

// @DELETE delete a store item       by ID
router.delete("/:id", deleteStoreItem);

// @PUT edit a store item            by ID
router.put("/:id", editStoreItem);

// @GET fetch a existing store item  by ID
router.get("/:id", singleStoreItem);


module.exports = router;