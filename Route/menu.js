const express = require('express');
const Router =  express.Router();
const {FoodCards} = require ('../middleware/starterimage');
const {starterApi} = require ('../controller/menu');






//Routes
Router.post('/starterApi',FoodCards.single('card-image'),starterApi);




module.exports = Router;