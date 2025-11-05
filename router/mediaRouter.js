const express = require("express");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const upload = require("../middlewares/media/upload")
const {
     getMedia,
     addMedia, 
     getMediaEdit, 
     getAddAllMedia,
     removeAllMediaUser,
     getAddMedia,
     getUpdate
    } = require("../controller/mediaController");

//router config
const router = express.Router();

router.get("/", decorateHtmlResponse("Media"), getMedia);
router.post("/", upload.single("image"), addMedia)
router.get("/data", decorateHtmlResponse("Add-Media"), getAddAllMedia);
router.delete("/delete/:id", removeAllMediaUser);
router.get("/print/:page", decorateHtmlResponse("Media-print"), checkLogin, getAddMedia);
router.get("/edit/:id", decorateHtmlResponse("Media-edit"), getMediaEdit);

router.post("/update/:id", decorateHtmlResponse("media-update"), getUpdate);

module.exports = router;