const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const SaveSchema = new Schema({
    name: {
        type: String,        
    },
    out: {
        type: Number,
    },
    inn: {
        type:Number
    },
    Value: {
        type:Number
    },
    recived: {
        type:String
    },
    filename: {
        type: String,
        required:true
    }
}, { timestamps: true });




module.exports = mongoose.model("Save", SaveSchema);