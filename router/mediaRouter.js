const express = require("express");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {getMedia, addMedia} = require("../controller/mediaController");
const upload = require("../middlewares/media/upload");

//router config
const router = express.Router();

router.get("/", decorateHtmlResponse("Media"), getMedia);

//post route
router.post("/", upload.single("image"), addMedia)

module.exports = router;