//external imports 
const {unlink}= require("fs");
const path = require("path");
//internal imports 
const User = require("../models/Bcboffice");


 async function getbcbData(req, res, next){
    try{
        const users = await User.find()
        res.render("bcb-user", {
            users:users
        })
    }catch(err){
        next(err)
    }
}

//remove users
async function removeBcbAllUser(req, res, next){
    try{
        const user = await User.findByIdAndDelete({
            _id: req.params.id
        });
        //avatar delete 
        if(user.image){
            unlink(
                path.join(__dirname,`/../public/uploads/bcbAvatars/${user.image}`),
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
    getbcbData,
    removeBcbAllUser
    
}