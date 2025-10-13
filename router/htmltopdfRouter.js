//external imports 
const express = require("express");

//internal imports 
const {gethtmltoPdf}= require("../controller/htmltopdfController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");

//router config
const router = express.Router();

//get route
router.get("/", decorateHtmlResponse("Acro"), checkLogin, gethtmltoPdf)



module.exports = router;