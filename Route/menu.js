const express = require('express');
const Router =  express.Router();
const {FoodCards} = require ('../middleware/starterimage');
const {BreakfastCards}=require('../middleware/breakfast');
const {lunchFoodCards} = require('../middleware/lunch');
const {popularFood} = require('../middleware/popularFood');
const {starterApi,
    GetAllDataOfstarterApi,
    GetDataOfstarterApiById,
    HardDeletestarterApi,
    BreakFastPostApi,
    GetBreakfastAllApi,
    GetBreakFastApiById,
    HardDeletebreakfastApi,
    LunchPostApi,
    GetAlllunchApi,
    GetlunchApiById,
    HardDeleteLunchApi,
    PopularFoodApi,
    Getpopularapi
 
} = require ('../controller/menu');






//Routes
Router.post('/starterApi',FoodCards.single('Foodcard-image'),starterApi);
Router.get('/GetAllDataOfstarterApi',GetAllDataOfstarterApi)
Router.get('/GetDataOfstarterApiById/:_id',GetDataOfstarterApiById);
Router.delete('/HardDeletestarterApi/:_id',HardDeletestarterApi);
Router.post('/BreakFastPostApi',BreakfastCards.single('breakcard-image'),BreakFastPostApi);
Router.get('/GetBreakfastAllApi',GetBreakfastAllApi);
Router.get('/GetBreakFastApiById/:_id',GetBreakFastApiById);
Router.delete('/HardDeletebreakfastApi/:_id',HardDeletebreakfastApi);
Router.post('/LunchPostApi',lunchFoodCards.single('lunchcard-image'),LunchPostApi);
Router.get('/GetAlllunchApi',GetAlllunchApi);
Router.get('/GetlunchApiById/:_id',GetlunchApiById);
Router.delete('/HardDeleteLunchApi/:_id',HardDeleteLunchApi);
Router.post('/PopularFoodApi',popularFood.single('Food-image'),PopularFoodApi);
Router.get('/Getpopularapi',Getpopularapi);




module.exports = Router;