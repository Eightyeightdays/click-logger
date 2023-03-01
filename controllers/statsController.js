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

        function getDates(arr){
            var datesArray = [];
            arr.map(el=> datesArray.push(el.dateCreated));
            return datesArray;
        }

        const dates1 = getDates(click1);
        const dates2 = getDates(click2);
        const dates3 = getDates(click3);
        const dates4 = getDates(click4);
        const dates5 = getDates(click5);
        const dates6 = getDates(click6);

        return res.status(200).json([
            dates1, 
            dates2,
            dates3,
            dates4,
            dates5,
            dates6
        ]);

    }catch(err){
        return res.status(400).json(err);
    }
}