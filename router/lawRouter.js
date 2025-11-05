//external imports 
const express = require("express");

//internal imports 
const {
    getLaw,
    addLawForce, 
    getlawEdit, 
    getlawData, 
    removeLawAllUser, 
    getAddLawPrint, 
    getUpadateLaw,
}= require("../controller/lawController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const upload = require("../middlewares/law/upload");
//router config
const router = express.Router();

//get route
router.get("/", decorateHtmlResponse("Law"), checkLogin, getLaw);
//post route
router.post("/", upload.single("image"), addLawForce);

//route
router.get("/print/:page", decorateHtmlResponse("print"), checkLogin, getAddLawPrint);
router.get("/edit/:id", decorateHtmlResponse("Law-edit"), checkLogin, getlawEdit);
router.post("/update/:id", decorateHtmlResponse("update"),checkLogin, getUpadateLaw);
//route
router.get("/data", decorateHtmlResponse("Law-Data"), checkLogin, getlawData);
router.delete("/delete/:id", removeLawAllUser);

module.exports = router;