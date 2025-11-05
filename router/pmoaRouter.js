//external imports 
const express = require("express");

//internal imports 
const {
    getPmoa,
    addPmoaTeam,
    getPmoaEdit, 
    getpmoaData, 
    removePmoaAllUser, 
    getAddPmoaPrint, 
    getUpadatePmoa
}= require("../controller/pmoaController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const upload = require("../middlewares/pmoa/upload")

//router config
const router = express.Router();
//get route
router.get("/", decorateHtmlResponse("PMOA"), checkLogin, getPmoa)

//post route
router.post("/", upload.single("image"), addPmoaTeam)

router.get("/edit/:id", decorateHtmlResponse("PMOA-edit"), checkLogin, getPmoaEdit);

//route
router.get("/print/:page", decorateHtmlResponse("print"), checkLogin, getAddPmoaPrint);

router.post("/update/:id", decorateHtmlResponse("update"),checkLogin, getUpadatePmoa);
//route
router.get("/data", decorateHtmlResponse("Pmoa-Data"), checkLogin, getpmoaData);
router.delete("/delete/:id", removePmoaAllUser);


module.exports = router;