const express = require('express');
const Router =  express.Router();
// const UploadProductImage =require('../middleware/uploadimage');
const { HeroImageApi,
        FourCardsApi,
        GetHeadingDescriptionFourCards,
        DelFourCards,
        ProductData } = require("../controller/generalsetting");

const {FourCards} =require('../middleware/uploadimage');
const {UploadProductImage} =require('../middleware/Newmodel');



Router.post('/HeroImageApi',HeroImageApi);
Router.post('/FourCardsApi',FourCards.array('images',20),FourCardsApi);
Router.get("/GetHeadingDescriptionFourCards",GetHeadingDescriptionFourCards);
Router.delete("/DelFourCards/:_id", DelFourCards);
Router.post('/ProductData',UploadProductImage.array('images',20),ProductData);


 






module.exports = Router;