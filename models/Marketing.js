//external imports
const mongoose = require("mongoose");

//Schema
const MarketingSchema = mongoose.Schema({
    id:{
        type: Number
    },
    manualnumber:{
        type:String,
        required:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    designation:{
        type:String
    },
    organization:{
        type:String
    },
    formno:{
        type:String,
        required:true,
    },
    nidno:{
        type: String,
    },
    
    cardname: {
            type: String,
            required: true
    },
    vanue:{
        type: String,
        required: true
    },
    zoneone:{
            type: String,
    },
    zonetwo:{
        type: String,
        },
    zonethree:{
        type: String,
    },
    zonefour:{
        type: String,
    },
    zonefive:{
        type: String,
    },
    zonesix:{
        type: String,
    },
    phone:{
        type:Number,
    },
    cardfooter:{
        type:String
    },
    image:{
        type:String
    },
    role:{
        type:String,
        enum:["admin", "user"],
        default:"user"
    }
}

);

const Merketing =mongoose.model("Merketing", MarketingSchema);
module.exports = Merketing;