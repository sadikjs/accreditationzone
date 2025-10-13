// //external imports
// const multer = require("multer");
// const path = require("path");
// const createError = require("http-errors")

// //upload avatar
// function uploader(
// subfolder_path,
// allow_file_types,
// max_file_size,
// err_message
// ){
//     // file upload folder 
//     const UPLOAD_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}/`;

//     //define the storage
//     const storage = multer.diskStorage({
//         destination: (req, file, cb)=>{
//             cb(null, UPLOAD_FOLDER)
//         },
//         filename:(req, file, cb)=>{
//             const fileExt = path.extname(file.originalname);
//             const filename = file.originalname
//                             .replace(fileExt, "")
//                             .toLocaleUpperCase()
//                             .split(" ")
//                             .join("-")+ "-" +
//                             Date.now();
//                     cb(null, filename + fileExt)
//         },
//     });

//     const upload = multer({
//         storage:storage,
//         limits:{
//             fileSize:max_file_size
//         }, 
//         fileFilter: (req, file, cb)=>{
//             if(allow_file_types.includes(file.mimetype)){
//                 cb(null, true)
//             }else{
//                 cb(createError(err_message));
//             }
//         }
//     })
//     return upload
// }

// //exports 
// module.exports = uploader;