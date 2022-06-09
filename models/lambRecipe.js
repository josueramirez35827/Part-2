const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OriginCountry = require("./originCountry");


const lambRecipe = new Schema(
  {
    title: { type: String, required: true },
    origin_country: { type: Schema.Types.ObjectId, ref: "OriginCountry" },
    ingredients: { type: String, required: true },
    picture: { type: String, required: true },
  },
)

module.exports = mongoose.model('lambRecipes', lambRecipe)