//external imports 
const express = require("express");

//internal imports
const {getUsers, addUser, removeUser} = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {userValidators, addUserValidationHandler} = require("../middlewares/users/userValidators");
const {checkLogin, requireRole}= require("../middlewares/common/checkLogin")

//router config
const router = express.Router();

//get route
router.get("/", decorateHtmlResponse("Users"), checkLogin, requireRole(["admin"]), getUsers);

//post route
router.post("/",checkLogin, requireRole(["admin"]), avatarUpload, userValidators, addUserValidationHandler, addUser);

//delete route
router.delete("/:id", removeUser)

//exports
module.exports= router;