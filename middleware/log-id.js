const Application = require("../models/newApplicationModel.js");
const nodemailer = require("nodemailer");

module.exports = async (req, res, next) =>{
    
    if(req.query.cvid == undefined){
        // if the CV is an older version that was sent out before the code was updated it will not contain query parameters
        next();
    }
    
    try{        
        const application = await Application.findOne({cvid: req.query.cvid});
        const sendMail = async()=>{
            let transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: 465,
                secure: true, 
                auth: {
                user: process.env.MAIL_USER, 
                pass: process.env.MAIL_PASS, 
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                console.log(error);
                } else {
                console.log("Server is ready to take our messages");
                }
            });

            let info = await transporter.sendMail({
                from: 'CV CLICK LOGGER', 
                to: process.env.EMAIL, 
                subject: `Someone clicked a link in your CV`, 
                html: 
                `<h1>${application.company} clicked a link in your CV</h1>
                <p>You applied on ${application.dateApplied} for the role of ${application.jobTitle} located in ${application.location}.</p>
                <a href=${application.link}>Follow this link to see the job details</a>
                <h2>GOOD LUCK! &#129310;</h2>`, 
            });
        }
        await sendMail();

        // console.log("EMAIL SENT");

        next();
    }catch(error){
        return res.status(400).json(error);
    }
}