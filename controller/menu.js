const  StarterCardModel  = require('../model/menu')
const fs=require('fs');
const path = require('path');

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


const GetAllDataOfstarterApi =async (req,res) =>{
    try {
        const GetAlldoc = await StarterCardModel.find();
        res.json({
            message:'Api of Get all Data is Working Successfulyy!!',
            Data:true,
            Result:GetAlldoc
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}


const GetDataOfstarterApiById =async(req,res) =>{
    try {
        const Id = req.params._id;
        const DocToFindById = await StarterCardModel.findOne(
            {_id:Id}
        );
        res.json({
            message:'Api Works Succesfully!',
            Data:true,
            Result:DocToFindById
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}

// const HardDeletestarterApi =async (req,res) =>{
//     try {
//         const Id = req.params._id;
//         const DocToFind = await StarterCardModel.findOne({_id:Id});
//         let DocToDel = null;
//         if(!!DocToFind){
//           const DocToDel = await StarterCardModel.deleteOne(
//          {_id:DocToFind._id});
//           DocToDel.imageDetails.forEach((file) => {
//             fs.unlinkSync(`${file.imageUrl}`);
//           });
//           fs.rmdirSync(`./assets/Menu/Starter/${file.filename}`);  
//         }
//         res.json({
//             message:'Api Works Successfulyy!!',
//             Data:true,
//             Result:DocToDel
//         })
//     } catch (error) {
//         res.json({
//             message:error.message,
//             Data:false,
//             Result:null
//         })
//     }
// }

const HardDeletestarterApi = async (req, res) => {
    try {
      const { _id } = req.params;
  
      const docToDelete = await StarterCardModel.findById(_id);
      if (!docToDelete) {
        return res.status(404).json({
          message: 'Card not found',
          data: false,
          result: null,
        });
      }
  
      const imagePath = `./${docToDelete.imageDetails.imageUrl}`;
      fs.unlinkSync(imagePath);
      fs.rmdirSync(`./assets/Menu/Starter/${docToDelete.FoodName}`);
  
      const hardDeleteResult = await StarterCardModel.deleteOne({ _id });
  
      res.json({
        message: 'Card deleted successfully',
        data: true,
        result: hardDeleteResult,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        data: false,
        result: null,
      });
    }
  };

module.exports={
    starterApi,
    GetAllDataOfstarterApi,
    GetDataOfstarterApiById,
    HardDeletestarterApi
}