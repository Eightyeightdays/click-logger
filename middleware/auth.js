const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req, res, next) =>{
    try{
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        const userId = decodedToken.userId;
        req.auth = {userId};      
        
        if(req.body.userId && req.body.userId !== userId){ //
            throw new Error("Invalid request");
        }else{
            next();
        }
    }catch(error){
        res.status(400).json(error)
    }
}