//external imports
const express = require("express");
const getMediaUpdate = require("../controller/updateMediaController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const router = express.Router();


router.post("/media-update/:id", decorateHtmlResponse("media-update"), getMediaUpdate);

module.exports = router;