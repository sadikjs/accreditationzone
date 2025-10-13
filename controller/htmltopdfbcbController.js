const path = require("path");
var fs = require("fs");
let ejs = require("ejs");
var pdf = require("html-pdf");
const Bcb = require("../models/Bcboffice");

const gethtmltoPdfbcb= async(req, res)=>{
    try {
        const users = await Bcb.find()
        const data = {
            users:users
        }
    const filePathName = path.resolve(__dirname, '../views/htmltopdfbcb.ejs');
     const htmlString = fs.readFileSync(filePathName).toString();
     let options = {
        format: 'A3',"orientation": "landscape" 
     }
     const ejsData = ejs.render(htmlString, data);
     pdf.create(ejsData, options).toFile('bcb.pdf', (err, response)=>{
        if(err)console.log(err);
       const filePath = path.resolve(__dirname, '../bcb.pdf');
       fs.readFile(filePath, (err,file)=>{
        if(err){
            console.log(err);
            return res.status(500).send('Could not download file');
        }
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment;filename="bcb.pdf"');
        res.send(file);
       })
     })

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    gethtmltoPdfbcb
}
