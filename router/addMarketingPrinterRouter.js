//external imports 
const express = require("express");

//internal imports 
const {getAddMarketingPrint}= require("../controller/printMarketingController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/marketing-print/:page", decorateHtmlResponse("print"), checkLogin, getAddMarketingPrint);

module.exports = router;