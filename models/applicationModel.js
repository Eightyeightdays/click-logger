const mongoose = require("mongoose"), Schema = mongoose.Schema;

const Application = Schema({
    count: {type: Number, required: true},
    lastUpdated: {type: String, required: true}
})

module.exports = mongoose.model("Applications", Application);