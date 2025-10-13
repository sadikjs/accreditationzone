//external imports 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

//internal imporst 
const User = require("../models/People")

//
function getLogin(req, res, next){
    res.render("index")
}


//do login 
async function login(req, res, next){
    try{
        const user = await User.findOne({
            $or:[{email: req.body.username}, {mobile: req.body.username}],
        });

        //password check
        if(user && user._id){
            const isValidPassword = await bcrypt.compare(
                req.body.password, user.password
            );
            
            //valid password
            if(isValidPassword){
                
                //userObject token 
                const userObject = {
                    username: user.name,
                    mobile: user.mobile, 
                    email: user.email,
                    role: user.role || "user",
                };

                //generate token
                const token = jwt.sign(userObject, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRY
                });

                //cookie set 
                res.cookie(process.env.COOKIE_NAME, token, {
                    maxAge: process.env.JWT_EXPIRY,
                    httpOnly: true,
                    signed: true

                });

                //set loged user in locals indentification
                res.locals.loggedInUser = userObject;
                
                //inbox page render
                res.render("home");

            }else{
                throw createError("Login failed! please try again")
            }
            
        }else{
            throw createError("Login failed! please try again")
        }

    }
    catch (err){
        res.render("index", {
            data:{
                username: req.body.username
            },
            errors: {
                common:{
                    msg: err.message
                }
            }
        })
    }
}

//logout route
function logout(req, res){
    res.clearCookie(process.env.COOKIE_NAME);
    res.send("logout")
}

module.exports = {
    getLogin,
    login, 
    logout
    
}