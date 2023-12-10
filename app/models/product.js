const { default: mongoose, Types } = require("mongoose");

const Schema = new mongoose.Schema({

    title: { type: String, required: true },
    shortdeck: { type: String, required: true },
    totaldeck: { type: String, required: true },
    entitle: { type: String, required: true },
    images: { type: [String], required: true },
    tags: { type: [String], default : [] },
    category: { type: Types.ObjectId, required: true },
    comments: { type: [], default : [] },
    like: { type: [Types.ObjectId], default : [] },
    dislike: { type: [Types.ObjectId], default : [] },
    bookmark: { type: [Types.ObjectId], default : [] },
    price: { type: Number,  default : 0},
    discount: { type: Number, default: 0 },
    count: { type: Number,  },





});

module.exports = {

    ProductModel: mongoose.model("product", Schema)

}