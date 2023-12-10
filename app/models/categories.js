const { default: mongoose, Types } = require("mongoose");

const Schema = new mongoose.Schema({

    title: { type: String, required: true },

});

module.exports = {

    Category: mongoose.model("category", Schema)

}