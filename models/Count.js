//external imports
const express = require("express")
const mongoose = require("mongoose")


const Countschema = mongoose.Schema({
    id:{
        type: String
    },
    seq: {
        type: Number
    }
})

const Countmodel = mongoose.model("Countmodel", Countschema)

module.exports = Countmodel;