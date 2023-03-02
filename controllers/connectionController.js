const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require("../models/userModel.js");

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