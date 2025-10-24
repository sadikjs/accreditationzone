//internal imports 
const Bcb = require("../models/Bcboffice");
const Countmodel = require("../models/Count");

const cardname = [
    {value:"TYPE A", label: "TYPE A"},
   {value: "TYPE B", label: "TYPE B"},
   {value:"TYPE C", label: "TYPE C"},
    {value:"TYPE G", label: "TYPE G"},
     {value:"OFFICIAL BCB", lable: "OFFICIAL BCB"},
       {value:"STAFF BCB", label: "STAFF BCB"},
       {value:"ACU", label: "ACU"},
       {value:"ORGANIZINE COMMITTEE", label: "ORGANIZINE COMMITTEE"},
       {value:"SUB-COMMITTEE", label: "SUB-COMMITTEE"},
       {value:"T & S", label: "T & S"},
       {value:"LOGISTICS & PROTOCOL", label:"LOGISTICS & PROTOCOL"},
       {value:"VENDOR", label: "VENDOR"},
       {value:"SERVICE PROVIDER",label:"SERVICE PROVIDER"},
       {value:"ON DUTY",label:"ON DUTY"},
       {value:"SPONSOR", label:"SPONSOR"},
       {value:"MEDIA CENTER", label: "MEDIA CENTER"},
       {value:"SPECIAL ENCLOSURE", label:"SPECIAL ENCLOSURE"},
       {value:"MEDIA", label:"MEDIA"},
       {value:"ANTI-DOPING", label:"ANTI-DOPING"},
       {value:"CLEANER", label:"CLEANER"},
   ]
  const vanue=  [
      { value:"DHAKA", label:"DHAKA"},
       { value:"CHATTOGRAM", label:"CHATTOGRAM"},
       {value:"SYLHET", label:"SYLHET"},
       {value:"ALL VENUE", label:"ALL VENUE"}
   ]
   
   const zoneone = [
        {value:"1", label:"1"}
   ]
   const zonetwo = [
       { value:"X", label:"X"},
       {value:"2", label:"2"}
   ]
   const zonethree =[
    {value:"X", label:"X"},
    {value:"3", label:"3"}    
   ]
   const zonefour = [
   {value:"X", label:"X"},
   {value:"4", label:"4"}  
   ]
   const zonefive =[
   {value:"X", label:"X"},
   {value:"5", label:"5"}    
   ]
   const zonesix = [
   {value:"X", label:"X"},
    {value:"6", label:"6"}
   ]

function getBcb(req, res, next){
    res.render("bcb")
}
//add user
async function addBcboffice(req, res, next){
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
            let newBcb = new Bcb({
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
            newBcb.save();
        }
    )
    try{
        res.status(200).json({
            message: " Your post was added successfully"
        }, 
        res.redirect("/bcb"))
        
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }

}


async function getbcbData(req, res, next){
    try{
        const users = await Bcb.find()
        res.render("bcb-user", {
            users:users
        })
    }catch(err){
        next(err)
    }
}

//remove users
async function removeBcbAllUser(req, res, next){
    try{
        const user = await Bcb.findByIdAndDelete({
            _id: req.params.id
        });
        //avatar delete 
        if(user.image){
            unlink(
                path.join(__dirname,`/../public/uploads/bcbAvatars/${user.image}`),
                (err)=>{
                        if(err)console.log(err);
                }
            );
        }
        res.status(200).json({
            message: " Users was remove successfully"
        })
    }catch(err){
        res.status(500).json({
            err: err.message
        })
    }
}
 
const getBcbEdit = async (req, res, next)=>{
try{
    const result = await Bcb.findById(req.params.id)
    res.render("bcb-edit", {data:result, cardname, vanue, zoneone, zonetwo,zonethree, zonefour, zonefive, zonesix});
}catch(err){
    res.status(500).json({
        err: err.message
    })
}

}

const getUpadateBcb = async (req, res, next)=>{
    try{
        const result = await Bcb.findByIdAndUpdate(req.params.id, req.body)
        if(result){
            res.redirect("/bcb/data")
        }
    }catch(err){
        res.status(500).json({
            err: err.message
        })
    }
    
    }
    
    
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
    getBcb,
    addBcboffice,
    getbcbData,
    removeBcbAllUser,
    getBcbEdit,
    getUpadateBcb,
    getAddBcbPrint

}