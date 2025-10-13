//external imports
const multer = require("multer");
const path = require("path");


// file upload folder 
const UPLOAD_FOLDER = `${__dirname}/../../public/uploads/pmoaAvatars`;
//define the storage
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, UPLOAD_FOLDER)
    }, 
    filename:(req, file, cb)=>{
        const fileExt = path.extname(file.originalname);
        const filename = file.originalname
                        .replace(fileExt, "")
                        .toLocaleUpperCase()
                        .split(" ")
                        .join("-")+ "-" +
                        Date.now();
                cb(null, filename + fileExt)
    },
})

const upload = multer({
    storage: storage,
   
    fileFilter: (req, file, cb)=>{
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ){
            cb(null, true)
        }else{
            console.log("only jpg and png file supported")
            cb(null, false)
        }
    },

    limits:{
        fileSize: 1000000
    }
})

module.exports = upload;

