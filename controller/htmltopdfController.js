const path = require("path");
var fs = require("fs");
let ejs = require("ejs");
var pdf = require("html-pdf");
const Team = require("../models/Team");

const gethtmltoPdf= async(req, res)=>{
    try {
        const users = await Team.find()
        const data = {
            users:users
        }
    const filePathName = path.resolve(__dirname, '../views/htmltopdf.ejs');
     const htmlString = fs.readFileSync(filePathName).toString();
     let options = {
        format: 'A3',"orientation": "landscape" 
     }
     const ejsData = ejs.render(htmlString, data);
     pdf.create(ejsData, options).toFile('users.pdf', (err, response)=>{
        if(err)console.log(err);
       const filePath = path.resolve(__dirname, '../users.pdf');
       fs.readFile(filePath, (err,file)=>{
        if(err){
            console.log(err);
            return res.status(500).send('Could not download file');
        }
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment;filename="users.pdf"');
        res.send(file);
       })
     })

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    gethtmltoPdf
}
