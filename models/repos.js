const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const repoSchema = new Schema({
    name: {type: String},
    github: {type: String},
    imageURL: {type: String}
})

const Repo = mongoose.model("Repos", repoSchema);

module.exports = Repo;


