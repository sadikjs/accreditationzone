//external imports 
const mongoose = require("mongoose")
const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const unlink = require("fs");
const path = require("path");

//internal imports 
const User = require("../../models/People");

//user validation
const userValidators = [
    check("name")
    .isLength({min: 1})
    .withMessage("Name is required")
    .isAlpha("en-US", {ignore: " -"})
    .withMessage("Name must not contain anythind other then Alphabet")
    .trim(),

    check("email")
    .isEmail()
    .withMessage("invalid email address!")
    .trim()
    .custom(async (value)=>{
        try{
            const user = await User.findOne({email: value});
            if(user){
                throw createError("Email already is use!");
            }
        }catch(err) {
            throw createError(err.message);
        }
    }),
    check("mobile")
    .isMobilePhone("bn-BD", {strictMode:true})
    .withMessage("mobile must be valid Bangladeshi mobile number")
    .custom(async(value)=>{
        try{
            const user = await User.findOne({mobile: value});
            if(user){
                throw createError("Mobile number already is user!")
            }
        }catch(err){
            throw createError(err.message)
        }
    }),
    check("password")
    .isStrongPassword()
    .withMessage("Password must be atlast 8 characters long & shoud contain at least 1 lowercase, 1 uppercase, 1 number and 1 symbol")
];

//validation handler 
const addUserValidationHandler = function(req, res, next){
    const errors = validationResult(req);
    const mappedErrors =errors.mapped();
    if(Object.keys(mappedErrors).length === 0){
        next();
    } else{
        //remove uploads files
        if(req.files.length > 0){
            const {filename} = req.files[0]
            unlink(
                path.join(__dirname, `/../public/uploads/avatars/${filename}`),
                (err)=>{
                        if(err)console.log(err)
                }
            );
        }else{
            //response error
            res.status(500).json({
                errors:mappedErrors
            })
        }
    }
}

//exports
module.exports = {
    userValidators,
    addUserValidationHandler
}
