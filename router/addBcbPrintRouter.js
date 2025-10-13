//external imports 
const express = require("express");

//internal imports 
const {getAddBcbPrint}= require("../controller/printBcbController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/bcb-print/:page", decorateHtmlResponse("print"), checkLogin, getAddBcbPrint);

module.exports = router;