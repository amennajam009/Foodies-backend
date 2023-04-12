const express = require('express');
const Router =  express.Router();
const {FourCards} =require('../middleware/uploadimage');
const {HeroImageMiddle} = require('../middleware/heroimage');
const {TwoImageMiddle} = require('../middleware/TwoImages')
const { HeroImageApi,
        FourCardsApi,
        GetHeadingDescriptionFourCards,
        HardDelFourCards,
        DeleteAllDatabase,
        Harddelete,
        GetHeroImage,
        HardDeletHeroImage,
        HeroImageGetById,
        GetFourCardsById,
        TwoImagesApi,
        GetTwocardsApi
    
         } = require("../controller/generalsetting");




Router.post('/HeroImageApi',HeroImageMiddle.array('images',20),HeroImageApi);
Router.post('/FourCardsApi',FourCards.single('card-image'),FourCardsApi);
Router.get("/GetHeadingDescriptionFourCards",GetHeadingDescriptionFourCards);
Router.get("/GetHeroImage",GetHeroImage)
Router.delete("/HardDelFourCards/:_id", HardDelFourCards);
Router.delete("/DeleteAllDatabase",DeleteAllDatabase);
Router.delete("/Harddelete/:_id",Harddelete);
Router.delete("/HardDeletHeroImage/:_id",HardDeletHeroImage);
Router.get('/HeroImageGetById/:_id',HeroImageGetById);
Router.get('/GetFourCardsById/:_id',GetFourCardsById);
Router.post('/TwoImagesApi',TwoImageMiddle.single('images'),TwoImagesApi);
Router.get('/GetTwocardsApi',GetTwocardsApi);








 






module.exports = Router;