//external imports 
const express = require("express");

//internal imports 
const {getAddPmoaPrint}= require("../controller/printPmoaController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/pmoa-print/:page", decorateHtmlResponse("print"), checkLogin, getAddPmoaPrint);

module.exports = router;