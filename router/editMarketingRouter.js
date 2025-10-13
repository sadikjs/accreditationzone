//external imports
const express = require("express");
const getMarketingEdit = require("../controller/marketingEditController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router = express.Router();


router.get("/marketing-edit/:id", decorateHtmlResponse("marketing-edit"), checkLogin, getMarketingEdit);

module.exports = router;