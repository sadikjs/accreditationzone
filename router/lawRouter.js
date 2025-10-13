//external imports 
const express = require("express");

//internal imports 
const {getLaw, addLawForce}= require("../controller/lawController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const upload = require("../middlewares/law/upload");
//router config
const router = express.Router();

//get route
router.get("/", decorateHtmlResponse("Law"), checkLogin, getLaw);

//post route
router.post("/", upload.single("image"), addLawForce)

module.exports = router;