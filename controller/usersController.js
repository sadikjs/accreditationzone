//external imports 
const bcrypt = require("bcrypt");
const {unlink}= require("fs");
const path = require("path");

//internal imports
const User = require("../models/People")

//render page
async function getUsers(req, res, next){
    try{
        const users = await User.find()
        res.render("users", {
            users:users
        })
    }catch(err){
        next(err)
    }
}

//add user 
async function addUser(req, res, next){
let newUser; 
const hashPassword = await bcrypt.hash(req.body.password, 10);

    if(req.files && req.files.length> 0){
        newUser = new User({
            ...req.body,
            avatar: req.files[0].filename,
            password: hashPassword
        })
    }else{
        newUser = new User({
            ...req.body,
            password:hashPassword
        })
    }

    //save user and error
    try{
        const result = await newUser.save();
        res.status(200).json({
            message: "User was added successfull"
        })
    }catch(err){
        res.status(500).json({
            errors:{
                common:{
                    msg: "Unknow error occured!"
                }
            }
        })
    }

} 

//remove users
async function removeUser(req, res, next){
    try{
        const user = await User.findByIdAndDelete({
            _id: req.params.id
        });
        
        //avatar delete 
        if(user.avatar){
            unlink(
                path.join(__dirname, `/../public/uploads/avatars/${user.avatar}`),
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
            errors:{
                common:{
                    msg:"could not delete user!"
                }
            }
        })
    }
}

//exports
module.exports = {
    getUsers,
    addUser,
    removeUser
}