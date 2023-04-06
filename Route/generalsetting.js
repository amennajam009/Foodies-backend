const express = require('express');
const Router =  express.Router();
const {FourCards} =require('../middleware/uploadimage');
// const UploadProductImage =require('../middleware/uploadimage');
const { HeroImageApi,
        FourCardsApi,
        GetHeadingDescriptionFourCards,
        DelFourCards,
        DeleteAllDatabase
         } = require("../controller/generalsetting");




Router.post('/HeroImageApi',HeroImageApi);
Router.post('/FourCardsApi',FourCards.array('images',20),FourCardsApi);
Router.get("/GetHeadingDescriptionFourCards",GetHeadingDescriptionFourCards);
Router.delete("/DelFourCards/:_id", DelFourCards);
Router.delete("/DeleteAllDatabase",DeleteAllDatabase)



 






module.exports = Router;