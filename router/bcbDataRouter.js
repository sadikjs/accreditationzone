//external imports 
const express = require("express");

//internal imports 
const {getbcbData, removeBcbAllUser}= require("../controller/bcbDataController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/", decorateHtmlResponse("Marketing-Data"), checkLogin, getbcbData);
router.delete("/:id", removeBcbAllUser);

module.exports = router;