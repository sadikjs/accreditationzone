
const express = require("express");
const getPmoaEdit = require("../controller/getPmoaEditController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router = express.Router();


router.get("/pmoa-edit/:id", decorateHtmlResponse("PMOA-edit"), checkLogin, getPmoaEdit);

module.exports = router;