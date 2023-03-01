const Click1 = require("../models/clickModel");
const Click2 = require("../models/clickModel2");
const Click3 = require("../models/clickModel3");
const Click4 = require("../models/clickModel4");
const Click5 = require("../models/clickModel5");
const Click6 = require("../models/clickModel6");

exports.total = async(req, res) =>{
    try{
        const click1 = await Click1.find();
        const click2 = await Click2.find();
        const click3 = await Click3.find();
        const click4 = await Click4.find();
        const click5 = await Click5.find();
        const click6 = await Click6.find();

        return res.status(200).json({
            click1: click1, 
            click2: click2,
            click3: click3,
            click4: click4,
            click5: click5,
            click6: click6,  
        });

    }catch(err){
        return res.status(400).json(err);
    }
}