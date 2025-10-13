//external imports 
const express = require("express");

//internal imports 
const {getlawData, removeLawAllUser}= require("../controller/lawDataController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/", decorateHtmlResponse("Law-Data"), checkLogin, getlawData);
router.delete("/:id", removeLawAllUser);

module.exports = router;