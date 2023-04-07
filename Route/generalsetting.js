const express = require('express');
const Router =  express.Router();
const {FourCards} =require('../middleware/uploadimage');
const {HeroImageMiddle} = require('../middleware/Newmodel');
const { HeroImageApi,
        FourCardsApi,
        GetHeadingDescriptionFourCards,
        DelFourCards,
        DeleteAllDatabase,
        Harddelete,
    
         } = require("../controller/generalsetting");




Router.post('/HeroImageApi',HeroImageMiddle.array('images',20),HeroImageApi);
Router.post('/FourCardsApi',FourCards.array('images',20),FourCardsApi);
Router.get("/GetHeadingDescriptionFourCards",GetHeadingDescriptionFourCards);
Router.delete("/DelFourCards/:_id", DelFourCards);
Router.delete("/DeleteAllDatabase",DeleteAllDatabase);
Router.delete("/Harddelete/:_id",Harddelete);





 






module.exports = Router;