const Joi = require("@hapi/joi");

const authSchema = Joi.object({
    mobile : Joi.string().length(11).pattern(/^09[0-9]{9}$/).required().error(new Error("شماره وارد شده اشتباه است")),
});

module.exports = {
    authSchema
}