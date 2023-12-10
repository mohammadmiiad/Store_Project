const { default: mongoose, Types } = require("mongoose");

const Schema = new mongoose.Schema({
    title: { type: String, default : "" },
    src: { type: String, required: true },
    image: { type: String, required: true },


});

module.exports = {

    SliderModel: mongoose.model("slider", Schema)

}