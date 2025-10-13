//external imports
const express = require("express");
const getBcbEdit = require("../controller/getBcbEditController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router = express.Router();


router.get("/bcb-edit/:id", decorateHtmlResponse("BCB-edit"), checkLogin, getBcbEdit);

module.exports = router;