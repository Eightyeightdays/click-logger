const Application = require("../models/applicationModel.js")
const dayjs = require("dayjs");
const applicationId = "6400bfc22ed5e4ebc9a9aded"; // taken from DB

exports.update = async (req, res) =>{
    const DATE = dayjs().format("dddd, MMMM D YYYY, HH:mm:ss a");
    const latestApplications = parseInt(req.body.applications);
    const application = await Application.findOne({_id: applicationId})
    const oldCount = application.count;
    const totalCount = oldCount + latestApplications;

    Application.updateOne({_id: applicationId}, {count: totalCount, lastUpdated:DATE})
    .then(()=> res.status(200).json({message: "Data updated", count: totalCount, lastUpdated: DATE}))
    .catch(error => res.status(400).json({error}))
    
    .catch(error => res.status(400).json("Application data not found"))
}

exports.getStats = async (req, res) =>{
    try{
        const application = await Application.findOne({_id: applicationId});
        const count = application.count;
        const date = application.lastUpdated;    
        return res.status(200).json({count: count, lastUpdated: date})
    }catch(error){
        return res.status(400).json(error);
    }
}