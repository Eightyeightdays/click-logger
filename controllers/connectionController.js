const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require("../models/userModel.js");
const Application = require("../models/applicationModel.js")
const dayjs = require("dayjs");

exports.login = (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email})
    .then(user =>{
        if(!user){
            return res.status(400).json("Failed to validate user")
        }else{
            if(password !== user.password){
                return res.status(401).json("Failed to validate user")
            }else{
                const token =  jwt.sign(
                    {userId: user._id},
                    process.env.TOKEN_SECRET,
                    {expiresIn: "10m"}
                );

                return res.status(200).json({token: token, userId: user._id});
            }
        }
    })
    .catch(error => res.status(400).json(error))
}

exports.update = async (req, res) =>{
    const applicationId = "6400bfc22ed5e4ebc9a9aded";
    const DATE = dayjs().format("dddd, MMMM D YYYY, HH:mm:ss a");
    const latestApplications = parseInt(req.body.applications);

    // Application.findOne({_id: applicationId})
    // .then(application =>{
    //     var totalCount = application.count + latestApplications;
    //     Application.updateOne({_id: applicationId}, {count: totalCount, lastUpdated:DATE})
    //     .then(()=> res.status(200).json({message: "Data updated", count: totalCount, lastUpdated}))
    //     .catch(error => res.status(400).json({error}))
    // })

    const application = await Application.findOne({_id: applicationId})
    const oldCount = application.count;
    const totalCount = oldCount + latestApplications;

    
    Application.updateOne({_id: applicationId}, {count: totalCount, lastUpdated:DATE})
    .then(()=> res.status(200).json({message: "Data updated", count: totalCount, lastUpdated: DATE}))
    .catch(error => res.status(400).json({error}))
    
    .catch(error => res.status(400).json("Application data not found"))
}