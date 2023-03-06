const mongoose = require("mongoose"), Schema = mongoose.Schema;

const Application = Schema({
    company: {type: String, required: true},
    jobTitle: {type: String, required: true},
    location: {type: String, required: true},
    link: {type: String, required: true},
    dateApplied: {type: String, required: true},
    cvid: {type: String, required: true}
})

module.exports = mongoose.model("Application", Application);