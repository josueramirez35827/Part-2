const { Router } = require('express');
const controllers = require("../controllers")
const router = Router();

router.get('/', (req, res) => res.send('this is the root!'))

router.post('/lambRecipes', controllers.createPlant)

router.get('/lambRecipes', controllers.getAllPlants)

router.get('/lambRecipes/:id', controllers.getPlantById)

router.put('/lambRecipes/:id', controllers.updatePlant)

router.delete('/lambRecipes/:id', controllers.deletePlant)


module.exports = router;