const { default: mongoose, Types } = require("mongoose");

const Schema = new mongoose.Schema({
    fullname: { type: String, default : "" },
    username: { type: String, required: true },
    phone: { type: String, required: true },
    otp: { type: Object, default : {
        code : 0 , 
        expires : 0
    } },
    Roles : {type : [String] , default : ["USER"]}




});

module.exports = {

    UserModel: mongoose.model("user", Schema)

}