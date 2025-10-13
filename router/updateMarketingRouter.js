//external imports
const express = require("express");
const getUpadateMarketing = require("../controller/updateMarketingController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router = express.Router();


router.post("/update-marketing/:id", decorateHtmlResponse("update"),checkLogin, getUpadateMarketing);

module.exports = router;