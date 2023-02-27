const Click = require("../models/clickModel.js");
const Click2 = require("../models/clickModel2.js");
const Click3 = require("../models/clickModel3.js");
const Click4 = require("../models/clickModel4.js");
const Click5 = require("../models/clickModel5.js");
const Click6 = require("../models/clickModel6.js");
const dayjs = require("dayjs");

exports.click = (req, res) => {
    const click = new Click({
        dateCreated: dayjs().format("dddd, MMMM D YYYY, HH:mm:ss a"),
    });

    click.save()
        .then(() => res.status(201).json({message: "Click recorded"}))
        .catch(error => res.status(400).json({error}))
}

exports.click2 = (req, res) => {
    const click = new Click2({
        dateCreated: dayjs().format("dddd, MMMM D YYYY, HH:mm:ss a"),
    });

    click.save()
        .then(() => res.status(201).json({message: "Click2 recorded"}))
        .catch(error => res.status(400).json({error}))
}

exports.click3 = (req, res) => {
    const click = new Click3({
        dateCreated: dayjs().format("dddd, MMMM D YYYY, HH:mm:ss a"),
    });

    click.save()
        .then(() => res.status(201).json({message: "Click3 recorded"}))
        .catch(error => res.status(400).json({error}))
}

exports.click4 = (req, res) => {
    const click = new Click4({
        dateCreated: dayjs().format("dddd, MMMM D YYYY, HH:mm:ss a"),
    });

    click.save()
        .then(() => res.status(201).json({message: "Click4 recorded"}))
        .catch(error => res.status(400).json({error}))
}

exports.click5 = (req, res) => {
    const click = new Click5({
        dateCreated: dayjs().format("dddd, MMMM D YYYY, HH:mm:ss a"),
    });

    click.save()
        .then(() => res.status(201).json({message: "Click5 recorded"}))
        .catch(error => res.status(400).json({error}))
}

exports.click6 = (req, res) => {
    const click = new Click6({
        dateCreated: dayjs().format("dddd, MMMM D YYYY, HH:mm:ss a"),
    });

    click.save()
        .then(() => res.status(201).json({message: "Click6 recorded"}))
        .catch(error => res.status(400).json({error}))
}