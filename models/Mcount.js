//external imports
const mongoose = require("mongoose")


const MCountschema = mongoose.Schema({
    id:{
        type: String
    },
    seq: {
        type: Number
    }
})

const MediaCount = mongoose.model("MediaCount", MCountschema)

module.exports = MediaCount;