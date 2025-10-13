//external imports 
//internal imports 
const Media = require("../models/Media");

 const getAddMedia =async(req, res, next)=> {
    try{
        let id = req.id;
        let currentPage = 1;
        let page = req.params.page
        if(page){
            currentPage = page;
        };
        let perPage = 4;
        let users = await Media.find({users:id})
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .sort( { "id": -1 } );
        let count = await Media.find({userId:id}).countDocuments();
        res.render("media-print", {
            users:users,
            count,
            currentPage,
            perPage
        })
    }catch(err){
        next(err)
    }
}

module.exports = {
    getAddMedia
}