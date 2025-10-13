
//external imports 
const express = require("express");

//internal imports 
const {getHome}= require("../controller/homeController")
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");

//router config
const router = express.Router();

//route
router.get("/", decorateHtmlResponse("home"), checkLogin, getHome)

module.exports = router;