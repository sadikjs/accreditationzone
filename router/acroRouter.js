//external imports 
const express = require("express");
//internal imports 
const {getAcro, addTeam, getUpdate, getEdit, getAddUser, removeAllUser, getAddPrint}= require("../controller/acroController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const upload = require("../middlewares/acro/upload")

//router config
const router = express.Router();
//get route
router.get("/", decorateHtmlResponse("Acro"), checkLogin, getAcro)
//post route
router.post("/", upload.single("image"), addTeam)
//edit
router.get("/edit/:id", decorateHtmlResponse("edit"),checkLogin, getEdit);
//update
router.post("/update/:id", decorateHtmlResponse("update"),checkLogin, getUpdate);
//route
router.get("/data", decorateHtmlResponse("Add-User"), checkLogin, getAddUser);
router.delete("/data/:id", removeAllUser);
router.get("/print/:page", decorateHtmlResponse("print"), checkLogin, getAddPrint);

module.exports = router;