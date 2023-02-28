const Click1 = require("../models/clickModel");
const Click2 = require("../models/clickModel2");
const Click3 = require("../models/clickModel3");
const Click4 = require("../models/clickModel4");
const Click5 = require("../models/clickModel5");
const Click6 = require("../models/clickModel6");

exports.getAll1 = (req, res)=>{
    Click1.find()
    .then(clicks => res.status(200).json(clicks))
    .catch(error => res.status(400).json({error}))
}
exports.getAll2 = (req, res)=>{
    Click2.find()
    .then(clicks => res.status(200).json(clicks))
    .catch(error => res.status(400).json({error}))
}
exports.getAll3 = (req, res)=>{
    Click3.find()
    .then(clicks => res.status(200).json(clicks))
    .catch(error => res.status(400).json({error}))
}
exports.getAll4 = (req, res)=>{
    Click4.find()
    .then(clicks => res.status(200).json(clicks))
    .catch(error => res.status(400).json({error}))
}
exports.getAll5 = (req, res)=>{
    Click5.find()
    .then(clicks => res.status(200).json(clicks))
    .catch(error => res.status(400).json({error}))
}
exports.getAll6 = (req, res)=>{
    Click6.find()
    .then(clicks => res.status(200).json(clicks))
    .catch(error => res.status(400).json({error}))
}