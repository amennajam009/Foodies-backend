const  StarterCardModel  = require('../model/menu')
const fs=require('fs');

const starterApi = async (req,res) =>{
    try {
        const {FoodName,FoodDescription,FoodPrice} = req.body;
        const MappingOfstarterApi = new StarterCardModel({
            FoodName,FoodDescription,FoodPrice,
            imageDetails: {
                imageUrl: `assets/Menu/Starter/${FoodName}/${req.file.filename}`,
                imageName: req.file.originalname,
                imageMimeType: req.file.mimetype,
            } 
        })
        const DoctToSave = await MappingOfstarterApi.save();
        res.json({
            message:'Api Working Successfully!!',
            Data:true,
            Result:DoctToSave
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}


module.exports={
    starterApi
}