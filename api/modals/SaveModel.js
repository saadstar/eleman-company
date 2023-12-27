const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const SaveSchema = new Schema({
    name: {
        type: String,        
    },
    out: {
        type: Number,
    },
    in: {
        type:Number
    },
    Value: {
        type:Number
    },
    recived: {
        type:String
    },
    img: {
        type:String
    }
}, { timestamps: true });




module.exports = mongoose.model("Save", SaveSchema);