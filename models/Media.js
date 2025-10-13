//external imports
const mongoose = require("mongoose");

//Schema
const TeamSchema = mongoose.Schema({
    id:{
        type: Number
    },
    manualnumber:{
        type:String
       
    },
    fullname:{
        type:String
   
    },
    designation:{
        type:String
   
    },
    organization:{
        type:String
        
    },
    formno:{
        type:String
      
    },
    nidno:{
        type: String,
    },
    
    cardname: {
            type: String,
    },
    vanue:{
        type: String,
    },
    zoneone:{
            type: String
    },
    zonetwo:{
        type: String
        },
    zonethree:{
        type: String
    },
    zonefour:{
        type: String
    },
    zonefive:{
        type: String
    },
    zonesix:{
        type: String
    },
    phone:{
        type: Number
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

const Media =mongoose.model("Media", TeamSchema);
module.exports = Media;