//external imports 
const express = require("express");

//internal  imports
const {getLogin, login, logout} = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse")
const {doLoginValidators, doLoginValidationHandler}=require("../middlewares/login/loginValidators");
const {redireactLogin} = require("../middlewares/common/checkLogin")

//configuration 
const router = express.Router();

const page_title = "Login";

router.get("/", decorateHtmlResponse(page_title), redireactLogin, getLogin);

//login route 
router.post("/", decorateHtmlResponse(page_title), doLoginValidators, doLoginValidationHandler, login)

//logout route
router.delete("/", logout)

module.exports = router;