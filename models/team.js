const mongoose = require("mongoose")

const Team = new mongoose.Schema({
    name : String,
    username: String,
    role : String,
    website: String

})

module.exports = mongoose.model("teams", Team)