//external imports 
const express = require("express");

//internal imports 
const {getAddLawPrint}= require("../controller/printLawController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/law-print/:page", decorateHtmlResponse("print"), checkLogin, getAddLawPrint);

module.exports = router;