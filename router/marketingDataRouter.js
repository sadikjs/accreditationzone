//external imports 
const express = require("express");

//internal imports 
const {getMarketingData, removeAllMarketingUser}= require("../controller/marketingDataController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/", decorateHtmlResponse("Marketing-Data"), checkLogin, getMarketingData);
router.delete("/:id", removeAllMarketingUser);


module.exports = router;