exports.login = (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    
    return res.status(200).json("REQUEST RECEIVED")
}