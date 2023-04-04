const express = require('express');
const Router =  express.Router();
// const UploadProductImage =require('../middleware/uploadimage');
const { HeroImageApi,
        FourCardsApi,
        GetHeadingDescriptionFourCards } = require("../controller/generalsetting");

const {UploadProductImage} =require('../middleware/uploadimage');



Router.post('/HeroImageApi',UploadProductImage.array('images',20),HeroImageApi);
Router.post('/FourCardsApi',FourCardsApi);
Router.get("/GetHeadingDescriptionFourCards",GetHeadingDescriptionFourCards)









module.exports = Router;