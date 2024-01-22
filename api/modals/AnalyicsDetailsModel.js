const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProcessDetailsSchema = new Schema({
    analyicsId: {
        type: String,
        required: true
    },
    dataNum: {
        type: Number,
        required: true
    },
    tubeNum: {
        type: Number,
        required: true
    },
    exportNum: {
        type: Number,
        required: true
    },
    roomNum: {
        type: Number,
        required: true
    },
    floorNum: {
        type: Number,
        required: true
    },
    houseNum: {
        type: Number,
        required: true
    },
    woodNum: {
        type: Number,
        required: true
    },
    blindNum: {
        type: Number,
        required: true
    },
    lockNum: {
        type: Number,
        required: true
    },
    waterNum: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required:true
    }
}, { timestamps: true });

module.exports = mongoose.model("AnalyicsDetails", ProcessDetailsSchema);