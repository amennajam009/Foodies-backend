const express = require('express');
const Router =  express.Router();
const {FoodCards} = require ('../middleware/starterimage');
const {starterApi,
    GetAllDataOfstarterApi,
    GetDataOfstarterApiById,
    HardDeletestarterApi
} = require ('../controller/menu');






//Routes
Router.post('/starterApi',FoodCards.single('Foodcard-image'),starterApi);
Router.get('/GetAllDataOfstarterApi',GetAllDataOfstarterApi)
Router.get('/GetDataOfstarterApiById/:_id',GetDataOfstarterApiById);
Router.delete('/HardDeletestarterApi/:_id',HardDeletestarterApi)


module.exports = Router;