//external imports 
const express = require("express");

//internal imports 
const {    
    getMarketing, 
    addMarketing, 
    getMarketingEdit,
    getMarketingData,
    removeAllMarketingUser,
    getAddMarketingPrint,
    getUpadateMarketing
}= require("../controller/marketingController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const upload = require("../middlewares/marketing/upload")

//router config
const router = express.Router();

//get route
router.get("/", decorateHtmlResponse("Marketing"), checkLogin, getMarketing)

//post route
router.post("/", upload.single("image"), addMarketing)

//route
router.get("/print/:page", decorateHtmlResponse("print"), checkLogin, getAddMarketingPrint);

router.get("/edit/:id", decorateHtmlResponse("marketing-edit"), checkLogin, getMarketingEdit);

//route
router.get("/data", decorateHtmlResponse("Marketing-Data"), checkLogin, getMarketingData);
router.delete("/delete/:id", removeAllMarketingUser);

router.post("/update/:id", decorateHtmlResponse("update"),checkLogin, getUpadateMarketing);

module.exports = router;