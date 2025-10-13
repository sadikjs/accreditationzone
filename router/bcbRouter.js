//external imports 
const express = require("express");

//internal imports 
const {getBcb, addBcboffice}= require("../controller/bcbController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const upload = require("../middlewares/bcb/upload");
//router config
const router = express.Router();

//get route
router.get("/", decorateHtmlResponse("BCB"), checkLogin, getBcb);

//post route
router.post("/",upload.single("image"), addBcboffice)

module.exports = router;