const mongoose = require("mongoose"), Schema = mongoose.Schema;

const User = Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model("User", User);