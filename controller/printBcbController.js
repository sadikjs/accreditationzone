//external imports 
//internal imports 
const Bcb = require("../models/Bcboffice");

 const getAddBcbPrint =async(req, res, next)=> {
    try{
        let id = req.id;
        let currentPage = 1;
        let page = req.params.page
        if(page){
            currentPage = page;
        };
        let perPage = 4;
        let users = await Bcb.find({users:id})
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .sort( { "id": -1 } );
        let count = await Bcb.find({userId:id}).countDocuments();
        res.render("bcb-print", {
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
    getAddBcbPrint
}