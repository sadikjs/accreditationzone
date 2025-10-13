//external imports 
const express = require("express");

//internal imports 
const {gethtmltoPdfbcb}= require("../controller/htmltopdfbcbController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");

//router config
const router = express.Router();

//get route
router.get("/", decorateHtmlResponse("Acro"), checkLogin, gethtmltoPdfbcb)



module.exports = router;