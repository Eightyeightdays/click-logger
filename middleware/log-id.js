const Application = require("../models/newApplicationModel.js");

module.exports = async (req, res, next) =>{
    try{        
        console.log("MIDDLEWARE")
        const application = await Application.findOne({cvid: req.query.cvid});
        const companyName = application.company;
        console.log(companyName)
        // send email here

        next();
    }catch(error){
        return res.status(400).json(error);
    }
}