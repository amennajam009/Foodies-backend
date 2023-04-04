const express = require('express');
const Router =  express.Router();
// const UploadProductImage =require('../middleware/uploadimage');
const { HeroImageApi,
        FourCardsApi,
        GetHeadingDescriptionFourCards,
        DelFourCards } = require("../controller/generalsetting");

const {UploadProductImage} =require('../middleware/uploadimage');



Router.post('/HeroImageApi',UploadProductImage.array('images',20),HeroImageApi);
Router.post('/FourCardsApi',FourCardsApi);
Router.get("/GetHeadingDescriptionFourCards",GetHeadingDescriptionFourCards);
Router.delete("/DelFourCards/:_id", DelFourCards);



 






module.exports = Router;