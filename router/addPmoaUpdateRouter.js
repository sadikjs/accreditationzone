//external imports
const express = require("express");
const getUpadatePmoa = require("../controller/updatePmoaController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router = express.Router();


router.post("/update-pmoa/:id", decorateHtmlResponse("update"),checkLogin, getUpadatePmoa);

module.exports = router;