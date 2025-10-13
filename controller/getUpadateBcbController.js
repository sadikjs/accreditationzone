//internal imports 
const User = require("../models/Bcboffice");

const getUpadateBcb = async (req, res, next)=>{
try{
    const result = await User.findByIdAndUpdate(req.params.id, req.body)
}catch(err){
    res.status(500).json({
        err: err.message
    })
}
res.redirect("/bcb-data")

}

module.exports= getUpadateBcb