//internal imports
const uploader = require("../../utilities/singleUploader")

//avatar upload
function avatarUpload(req, res, next){
    const upload = uploader(
        "avatars",
        ["image/jpg", "image/jpeg", "image/png"],
        1000000,
        "only .jpg .jpeg and .png format allow!"
    )

    //call the middleware function 
    upload.any()(req, res, (err)=>{
        if(err){
            res.status(500).json({
                errors:{
                    avatar:{
                        msg: err.message,
                    }
                }
            })
        }else{
            next();
        }
    })
}

//exports
module.exports = avatarUpload;