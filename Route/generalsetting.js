const express = require('express');
const Router =  express.Router();
// const UploadProductImage =require('../middleware/uploadimage');
const { HeroImageApi} = require("../controller/generalsetting");

const {UploadProductImage} =require('../middleware/uploadimage');



Router.post('/HeroImageApi',UploadProductImage.array('images',20),HeroImageApi)









module.exports = Router;