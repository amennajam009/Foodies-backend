const express = require('express');
const Router =  express.Router();
const {FoodCards} = require ('../middleware/starterimage');
const {BreakfastCards}=require('../middleware/breakfast');
const {starterApi,
    GetAllDataOfstarterApi,
    GetDataOfstarterApiById,
    HardDeletestarterApi,
    BreakFastPostApi,
    GetBreakfastAllApi,
    GetBreakFastApiById
} = require ('../controller/menu');






//Routes
Router.post('/starterApi',FoodCards.single('Foodcard-image'),starterApi);
Router.get('/GetAllDataOfstarterApi',GetAllDataOfstarterApi)
Router.get('/GetDataOfstarterApiById/:_id',GetDataOfstarterApiById);
Router.delete('/HardDeletestarterApi/:_id',HardDeletestarterApi);
Router.post('/BreakFastPostApi',BreakfastCards.single('breakcard-image'),BreakFastPostApi);
Router.get('/GetBreakfastAllApi',GetBreakfastAllApi);
Router.get('/GetBreakFastApiById/:_id',GetBreakFastApiById)


module.exports = Router;