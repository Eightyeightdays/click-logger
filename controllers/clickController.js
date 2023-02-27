const Click = require("../models/clickModel.js");
const dayjs = require("dayjs");

exports.click = (req, res) => {
    console.log("TEST")
    const click = new Click({
        dateCreated: dayjs().format("dddd, MMMM D YYYY, HH:mm:ss a"),
    });

    click.save()
        .then(() => res.status(201).json({message: "Click recorded"}))
        .catch(error => res.status(400).json({error}))
}