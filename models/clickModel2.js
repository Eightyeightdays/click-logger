const mongoose = require("mongoose"), Schema = mongoose.Schema;

const click = Schema({
    dateCreated: {type: String, required: true}
})

module.exports = mongoose.model("Click2", click);