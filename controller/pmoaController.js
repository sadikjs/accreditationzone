//internal imports 
const Pmoa = require("../models/Pmoa");
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
const getPmoaEdit = async (req, res, next)=>{
try{
   const result = await Pmoa.findById(req.params.id)
   res.render("pmoa-edit", {data:result, cardname, vanue, zoneone, zonetwo,zonethree, zonefour, zonefive, zonesix});
}catch(err){
   res.status(500).json({
       err: err.message
   })
}

}

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


async function getpmoaData(req, res, next){
    try{
        const users = await Pmoa.find()
        res.render("pmoa-data", {
            users:users
        })
    }catch(err){
        next(err)
    }
}

//remove users
async function removePmoaAllUser(req, res, next){
    try{
        const user = await Pmoa.findByIdAndDelete({
            _id: req.params.id
        });
        //avatar delete 
        if(user.image){
            unlink(
                path.join(__dirname, `/../public/uploads/pmoaAvatars/${user.image}`),
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


const getAddPmoaPrint =async(req, res, next)=> {
    try{
        let id = req.id;
        let currentPage = 1;
        let page = req.params.page
        if(page){
            currentPage = page;
        };
        let perPage = 4;
        let users = await Pmoa.find({users:id})
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .sort( { "id": -1 } );
        let count = await Pmoa.find({userId:id}).countDocuments();
        res.render("pmoa-print", {
            users:users,
            count,
            currentPage,
            perPage
        })
    }catch(err){
        next(err)
    }
}

const getUpadatePmoa = async (req, res, next)=>{
    try{
        const result = await Pmoa.findByIdAndUpdate(req.params.id, req.body)
        if(result){
            res.redirect("/pmoa/data")
        }
    }catch(err){
        res.status(500).json({
            err: err.message
        })
    }
    
    }

module.exports = {
    getPmoa,
    addPmoaTeam,
    getPmoaEdit, 
    getpmoaData, 
    removePmoaAllUser, 
    getAddPmoaPrint, 
    getUpadatePmoa
}