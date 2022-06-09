const LambRecipe = require('../models/lambRecipe');

const createLambRecipe = async (req, res) => {
  try {
    const lambRecipe = await new LambRecipe(req.body)
    await lambRecipe.save()
    return res.status(201).json({
      lambRecipe,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}


const getAllLambRecipes = async (req, res) => {
  try {
    const lambRecipes = await LambRecipe.find()
    return res.status(200).json({ lambRecipes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getLambRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const lambRecipe = await LambRecipe.findById(id)
    if (lambRecipe) {
      return res.status(200).json({ lambRecipe })
    }
    return res.status(404).send('Recipe not found');
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


const updateLambRecipe =  (req, res) => {
  try {
    const { id } = req.params
   LambRecipe.findByIdAndUpdate(id, req.body, { new: true }, (err, lambRecipe) => {
     
      if (err !== null) {
        console.log(err, 'error')
        res.status(404).send(err.message)
      } else {
        console.log(lambRecipe)
        res.json(lambRecipe)
      }
    })
  } catch (error) {
   return  res.status(500).send(error.message)
  }
}

const deleteLambRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await LambRecipe.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Recipe deleted");
    }
    throw new Error("Recipe not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


module.exports = {
  createLambRecipe,
  getAllLambRecipes,
  getLambRecipeById,
  updateLambRecipe,
  deleteLambRecipe
}