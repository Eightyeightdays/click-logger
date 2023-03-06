// const Application = require("../models/applicationModel.js") // DELETE
const Application = require("../models/newApplicationModel.js");
const dayjs = require("dayjs"); // DELETE
const applicationId = "6400bfc22ed5e4ebc9a9aded"; // DELETE

exports.update = async (req, res) =>{// DELETE
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

exports.getStats = async (req, res) =>{// DELETE
    try{
        const application = await Application.findOne({_id: applicationId});
        const count = application.count;
        const date = application.lastUpdated;    
        return res.status(200).json({count: count, lastUpdated: date})
    }catch(error){
        return res.status(400).json(error);
    }
}

exports.getAll = async (req, res) =>{
    try{
        const allApplications = await Application.find().sort({_id:-1});
        const count = allApplications.length;
        const date = allApplications[0].dateApplied;
        return res.status(200).json({count: count, lastUpdated: date});
    }catch(error){
        return res.status(400).json(error);
    }
}

exports.add = async (req, res) =>{
    const application = new Application({
        company: req.body.company,
        jobTitle: req.body.jobTitle,
        location: req.body.location,
        link: req.body.link,
        dateApplied: req.body.dateApplied,
        cvid: req.body.cvid
    });

    const allApplications = await Application.find();
    const count = allApplications.length +1;
    application.save()
    .then(()=> res.status(200).json({Message: `Application for ${req.body.company} saved`, count: count}))
    .catch(error => res.status(400).json(error))
}