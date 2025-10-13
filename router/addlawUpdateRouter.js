//external imports
const express = require("express");
const getUpadateLaw = require("../controller/getUpadateLawController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router = express.Router();


router.post("/law-update/:id", decorateHtmlResponse("update"),checkLogin, getUpadateLaw);

module.exports = router;