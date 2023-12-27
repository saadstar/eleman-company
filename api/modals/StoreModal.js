const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    quantityOut: {
      type: Number,
    },
    img: {
      type: String,
      required: true,
    },
    nameOne: {
      type: String,
    },
    nameTwo: {
      type: String,
    },
    driver: {
      type:String
    },
    exist: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Store", StoreSchema);