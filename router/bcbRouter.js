//external imports 
const express = require("express");

//internal imports 
const {getBcb, addBcboffice, 
    getbcbData,
    removeBcbAllUser,
    getBcbEdit,
    getUpadateBcb,
    getAddBcbPrint 
}= require("../controller/bcbController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const upload = require("../middlewares/bcb/upload");
//router config
const router = express.Router();

//get route
router.get("/", decorateHtmlResponse("BCB"), checkLogin, getBcb);

//post route
router.post("/",upload.single("image"), addBcboffice)

//route
router.get("/data", decorateHtmlResponse("bcb"), checkLogin, getbcbData);
router.delete("/:id", removeBcbAllUser);

router.get("/edit/:id", decorateHtmlResponse("BCB-edit"), checkLogin, getBcbEdit);
router.get("/print/:page", decorateHtmlResponse("print"), checkLogin, getAddBcbPrint);
router.post("/update/:id", decorateHtmlResponse("update"),checkLogin, getUpadateBcb);
module.exports = router;