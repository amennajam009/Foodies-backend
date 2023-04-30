const express = require('express');
const Router =  express.Router();
const {FoodCards} = require ('../middleware/starterimage');
const {starterApi,
    GetAllDataOfstarterApi
} = require ('../controller/menu');






//Routes
Router.post('/starterApi',FoodCards.single('Foodcard-image'),starterApi);
Router.get('./GetAllDataOfstarterApi',GetAllDataOfstarterApi)



module.exports = Router;