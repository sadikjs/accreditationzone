//external imports
const express = require("express");
const getUpadateBcb = require("../controller/getUpadateBcbController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router = express.Router();


router.post("/bcb-update/:id", decorateHtmlResponse("update"),checkLogin, getUpadateBcb);

module.exports = router;