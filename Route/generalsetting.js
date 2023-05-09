const express = require('express');
const Router =  express.Router();
const {FourCards} =require('../middleware/uploadimage');
const {HeroImageMiddle} = require('../middleware/heroimage');
const {TwoImageMiddle} = require('../middleware/TwoImages');
const {threehomeCards} = require('../middleware/threehomecard');

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
        GetTwocardsApi,
        GetTwocardsById,
        HardDeleteTwoimage,
        FrequentlyAskedQestions,
        GetFrequentlyAskedQestions,
        GetFrequeById,
        HardDeletFrequentlyAskedQue,
        HomeThreeCardsApi,
        HomeThreeCardsGetAllData,
        Harddeletethreehomecard
    
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
Router.get('/GetTwocardsById/:_id',GetTwocardsById);
Router.delete('/HardDeleteTwoimage/:_id',HardDeleteTwoimage);
Router.post('/FrequentlyAskedQestions',FrequentlyAskedQestions);
Router.get('/GetFrequentlyAskedQestions',GetFrequentlyAskedQestions);
// already likh di hai kl k liye icko bss analytics may implement karwana hia
Router.get('/GetFrequeById/:_id',GetFrequeById);
Router.delete('/HardDeletFrequentlyAskedQue/:_id',HardDeletFrequentlyAskedQue);
Router.post('/HomeThreeCardsApi',threehomeCards.single('threecard-image'),HomeThreeCardsApi);
Router.get('/HomeThreeCardsGetAllData',HomeThreeCardsGetAllData);
Router.delete('/Harddeletethreehomecard/:_id',Harddeletethreehomecard)










 






module.exports = Router;