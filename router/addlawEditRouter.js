
const express = require("express");
const getlawEdit = require("../controller/getLawEditController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router = express.Router();


router.get("/law-edit/:id", decorateHtmlResponse("Law-edit"), checkLogin, getlawEdit);

module.exports = router;