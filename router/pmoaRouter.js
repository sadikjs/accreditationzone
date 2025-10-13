//external imports 
const express = require("express");

//internal imports 
const {getPmoa, addPmoaTeam}= require("../controller/pmoaController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const upload = require("../middlewares/pmoa/upload")

//router config
const router = express.Router();

//get route
router.get("/", decorateHtmlResponse("PMOA"), checkLogin, getPmoa)

//post route
router.post("/", upload.single("image"), addPmoaTeam)

module.exports = router;