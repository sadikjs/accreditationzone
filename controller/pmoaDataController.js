//external imports 
const {unlink}= require("fs");
const path = require("path");
//internal imports 
const Pmoa = require("../models/Pmoa");


 async function getpmoaData(req, res, next){
    try{
        const users = await Pmoa.find()
        res.render("pmoa-data", {
            users:users
        })
    }catch(err){
        next(err)
    }
}

//remove users
async function removePmoaAllUser(req, res, next){
    try{
        const user = await Pmoa.findByIdAndDelete({
            _id: req.params.id
        });
        //avatar delete 
        if(user.image){
            unlink(
                path.join(__dirname, `/../public/uploads/pmoaAvatars/${user.image}`),
                (err)=>{
                        if(err)console.log(err);
                }
            );
        }
        res.status(200).json({
            message: " Users was remove successfully"
        })
    }catch(err){
        res.status(500).json({
            err: err.message
        })
    }
}

module.exports = {
    getpmoaData,
    removePmoaAllUser
    
}