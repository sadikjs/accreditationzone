//internal imports 
const User = require("../models/Bcboffice");

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
const getBcbEdit = async (req, res, next)=>{
try{
    const result = await User.findById(req.params.id)
    res.render("bcb-edit", {data:result, cardname, vanue, zoneone, zonetwo,zonethree, zonefour, zonefive, zonesix});
}catch(err){
    res.status(500).json({
        err: err.message
    })
}

}

module.exports= getBcbEdit;