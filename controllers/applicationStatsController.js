const Application = require("../models/newApplicationModel.js");
const dayjs = require("dayjs");

exports.getAll = async (req, res) =>{
    try{
        const allApplications = await Application.find().sort({_id:-1});
        const count = allApplications.length;
        const date = allApplications[0].dateApplied;
        return res.status(200).json({count: count, lastUpdated: dayjs(date).format("dddd, MMMM D YYYY")});
    }catch(error){
        return res.status(400).json(error);
    }
}

exports.add = async (req, res) =>{
    const DATE = dayjs(req.body.dateApplied).format("dddd, MMMM D YYYY");

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
    .then(()=> res.status(200).json({Message: `Application for ${req.body.company} saved`, count: count, lastUpdated: DATE}))
    .catch(error => res.status(400).json(error))
}