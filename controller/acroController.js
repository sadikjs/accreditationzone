//internal imports 
const Team = require("../models/Team");
const Countmodel = require("../models/Count");
//external imports 
const {unlink}= require("fs");
const path = require("path");

const cardname = [
    { value: "TYPE A", label: "TYPE A" },
    { value: "TYPE B", label: "TYPE B" },
    { value: "TYPE C", label: "TYPE C" },
    { value: "TYPE G", label: "TYPE G" },
    { value: "OFFICIAL BCB", lable: "OFFICIAL BCB" },
    { value: "STAFF BCB", label: "STAFF BCB" },
    { value: "ACU", label: "ACU" },
    { value: "ORGANIZINE COMMITTEE", label: "ORGANIZINE COMMITTEE" },
    { value: "SUB-COMMITTEE", label: "SUB-COMMITTEE" },
    { value: "T & S", label: "T & S" },
    { value: "LOGISTICS & PROTOCOL", label: "LOGISTICS & PROTOCOL" },
    { value: "VENDOR", label: "VENDOR" },
    { value: "SERVICE PROVIDER", label: "SERVICE PROVIDER" },
    { value: "ON DUTY", label: "ON DUTY" },
    { value: "SPONSOR", label: "SPONSOR" },
    { value: "MEDIA CENTER", label: "MEDIA CENTER" },
    { value: "SPECIAL ENCLOSURE", label: "SPECIAL ENCLOSURE" },
    { value: "MEDIA", label: "MEDIA" },
    { value: "ANTI-DOPING", label: "ANTI-DOPING" },
    { value: "CLEANER", label: "CLEANER" },
]
const vanue = [
    { value: "DHAKA", label: "DHAKA" },
    { value: "CHATTOGRAM", label: "CHATTOGRAM" },
    { value: "SYLHET", label: "SYLHET" },
    { value: "ALL VENUE", label: "ALL VENUE" }
]

const zoneone = [
    { value: "1", label: "1" }
]
const zonetwo = [
    { value: "X", label: "X" },
    { value: "2", label: "2" }
]
const zonethree = [
    { value: "X", label: "X" },
    { value: "3", label: "3" }
]
const zonefour = [
    { value: "X", label: "X" },
    { value: "4", label: "4" }
]
const zonefive = [
    { value: "X", label: "X" },
    { value: "5", label: "5" }
]
const zonesix = [
    { value: "X", label: "X" },
    { value: "6", label: "6" }
]

function getAcro(req, res, next) {
    res.render("acro")
}

//add user
async function addTeam(req, res, next) {
    Countmodel.findOneAndUpdate(
        { id: "autoval" },
        { "$inc": { "seq": 1 } },
        { new: true }, (err, cd) => {
            let seqId
            if (cd == null) {
                const newval = new Countmodel({ id: "autoval", seq: 1 })
                newval.save()
                seqId = 1
            } else {
                seqId = cd.seq
            }
            let newTeam = new Team({
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
                phone: req.body.phone,
                cardfooter: req.body.cardfooter,
                image: req.file.filename,
                role: req.body.role,
                id: seqId
            })
            newTeam.save();
        }
    )
    try {
        res.status(200).json({
            message: " Your post was added successfully"
        },
            res.redirect("/acro"))
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const getEdit = async (req, res, next) => {
    try {
        const result = await Team.findById(req.params.id)
        res.render("edit", { data: result, cardname, vanue, zoneone, zonetwo, zonethree, zonefour, zonefive, zonesix });
    } catch (err) {
        res.status(500).json({
            err: err.message
        })
    }

}

const getUpdate = async (req, res, next) => {
    try {
        const result = await Team.findByIdAndUpdate(req.params.id, req.body)
    } catch (err) {
        res.status(500).json({
            err: err.message
        })
    }
    res.redirect("/acro/list")
}



async function getAddUser(req, res, next){
    try{
        const users = await Team.find()
        res.render("add-user", {
            users:users
        })
    }catch(err){
        next(err)
    }
}

//remove users
async function removeAllUser(req, res, next){
    try{
        const user = await Team.findByIdAndDelete({
            _id: req.params.id
        });
        //avatar delete 
        if(user.image){
            unlink(
                path.join(__dirname, `/../public/uploads/acroAvatars/${user.image}`),
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

async function getAddPrint(req, res, next){
    try{
        let id = req.id;
        let currentPage = 1;
        let page = req.params.page
        if(page){
            currentPage = page;
        };
        let perPage = 4;
        let users = await Team.find({users:id})
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .sort( { "id": -1 } );
        let count = await Team.find({userId:id}).countDocuments();
        res.render("print", {
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
    getAcro,
    addTeam,
    getUpdate,
    getEdit, 
    getAddUser, 
    removeAllUser,
    getAddPrint
}