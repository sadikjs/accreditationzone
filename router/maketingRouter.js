//external imports 
const express = require("express");

//internal imports 
const {getMarketing, addMarketing}= require("../controller/marketingController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const upload = require("../middlewares/marketing/upload")

//router config
const router = express.Router();

//get route
router.get("/", decorateHtmlResponse("Marketing"), checkLogin, getMarketing)

//post route
router.post("/", upload.single("image"), addMarketing)

module.exports = router;