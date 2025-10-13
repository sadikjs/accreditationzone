

//internal imports 
const Media = require("../models/Media");
const MediaCount = require("../models/Mcount");

function getMedia(req, res, next){
    res.render("media")
}
//add user
async function addMedia(req, res, next){
    MediaCount.findOneAndUpdate(
        {id: "autoval"},
        {"$inc": {"seq":1} },
        {new:true}, (err, cd)=>{
            let seqId
            if(cd==null){
                const newval = new MediaCount({id:"autoval", seq:1})
                newval.save()
                seqId = 1
                
            }else{
                seqId=cd.seq
            }
            let newMedia = new Media({
                // ...req.body,
                id: req.body.id,
                manualnumber: req.body.manualnumber,
                cardname: req.body.cardname,
                formno: req.body.formno,
                fullname: req.body.fullname,
                designation: req.body.designation,
                nidno: req.body.nidno,
                organization: req.body.organization,
                vanue: req.body.vanue,
                zoneone: req.body.zoneone,
                zonetwo: req.body.zonetwo,
                zonethree: req.body.zonethree,
                zonefour: req.body.zonefour,
                zonefive: req.body.zonefive,
                zonesix: req.body.zonesix,
                phone:req.body.phone,
                cardfooter:req.body.cardfooter,
                image: req.file.filename,
                role:req.body.role,
                id: seqId
            })
            newMedia.save();
        }
    )
    try{
        res.status(200).json({
            message: " Your post was added successfully"
        }, 
        res.redirect("/media"))
        
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }

}
module.exports = {
    getMedia,
    addMedia
}