//external imports 
const express = require("express");

//internal imports 
const {getAddAllMedia, removeAllMediaUser}= require("../controller/addMediaController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

//router config
const router = express.Router();

//route
router.get("/", decorateHtmlResponse("Add-Media"), getAddAllMedia);
router.delete("/:id", removeAllMediaUser);



module.exports = router;