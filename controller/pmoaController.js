//internal imports 
const Pmoa = require("../models/Pmoa");
const Countmodel = require("../models/Count");

function getPmoa(req, res, next){
    res.render("pmoa")
}
//add user
async function addPmoaTeam(req, res, next){
         Countmodel.findOneAndUpdate(
        {id: "autoval"},
        {"$inc": {"seq":1} },
        {new:true}, (err, cd)=>{
            let seqId
            if(cd==null){
                const newval = new Countmodel({id:"autoval", seq:1})
                newval.save()
                seqId = 1
                
            }else{
                seqId=cd.seq
            }
            
             let newPmoa = new Pmoa({
                // ...req.body,
                id: req.body.id,
                manualnumber: req.body.manualnumber,
                formno: req.body.formno,
                cardname: req.body.cardname,
                fullname: req.body.fullname,
                designation: req.body.designation,
                organization: req.body.organization,
                nidno: req.body.nidno,
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
            newPmoa.save();
        }
    )
    
   try{
        res.status(200).json({
            message: "Your post was added successfully"
        }, 
        res.redirect("/pmoa"))
        
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }

}
module.exports = {
    getPmoa,
    addPmoaTeam
}