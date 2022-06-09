const mongoose = require("mongoose")
const Schema = mongoose.Schema

const lambRecipe = new Schema(
  {
    title: { type: String, required: true },
    origin_country: { type: String, required: true },
    ingredients: { type: String, required: true },
    picture: { type: String, required: true },
  },
)

module.exports = mongoose.model('lambRecipes', lambRecipe)