//external imports 
const express = require("express");

//internal imports 
const {getpmoaData, removePmoaAllUser}= require("../controller/pmoaDataController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
//router config
const router = express.Router();

//route
router.get("/", decorateHtmlResponse("Law-Data"), checkLogin, getpmoaData);
router.delete("/:id", removePmoaAllUser);

module.exports = router;