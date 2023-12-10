const { default: mongoose, Types } = require("mongoose");

const Schema = new mongoose.Schema({




});

module.exports = {

    PaymentModel: mongoose.model("payment", Schema)

}