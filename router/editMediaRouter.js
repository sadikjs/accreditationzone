//external imports
const express = require("express");
const getMediaEdit = require("../controller/editMediaController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const router = express.Router();


router.get("/media-edit/:id", decorateHtmlResponse("Media-edit"), getMediaEdit);

module.exports = router;