//external imports 
const express = require("express");

//internal imports 
const {getAddMedia}= require("../controller/mediaPrintController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/media-print/:page", decorateHtmlResponse("Media-print"), checkLogin, getAddMedia);

module.exports = router;