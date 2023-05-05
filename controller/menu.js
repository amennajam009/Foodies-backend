const {StarterModel, BreakFastModel , LunchModel }  = require('../model/menu')
const fs=require('fs');
const path = require('path');

const starterApi = async (req,res) =>{
    try {
        const {FoodName,FoodDescription,FoodPrice} = req.body;
        const MappingOfstarterApi = new StarterModel({
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
        const GetAlldoc = await StarterModel.find();
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
        const DocToFindById = await StarterModel.findOne(
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

const HardDeletestarterApi = async (req, res) => {
    try {
      const { _id } = req.params;
  
      const docToDelete = await StarterModel.findById(_id);
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
  
      const hardDeleteResult = await StarterModel.deleteOne({ _id });
  
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



  // breakfast Api's 
  const BreakFastPostApi = async (req,res) =>{
    try {
        const {FoodName,FoodDescription,FoodPrice} = req.body;
        const MappingOfstarterApi = new BreakFastModel({
            FoodName,FoodDescription,FoodPrice,
            imageDetails: {
                imageUrl: `assets/Menu/Breakfast/${FoodName}/${req.file.filename}`,
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

const GetBreakfastAllApi =async (req,res) =>{
    try {
        const DocToGet = await BreakFastModel.find();
        res.json({
            message:'Api Works Successfully!!',
            Data:true,
            Result:DocToGet
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}
const GetBreakFastApiById =async(req,res) =>{
    try {
       const Id = req.params._id;
       const GetDataById = await BreakFastModel.findById(
        {_id:Id}
       );
       res.json({
        message:'Api is Working Successfullyy!!',
        Data:true,
        Result:GetDataById
       }) 
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}

const HardDeletebreakfastApi = async (req, res) => {
    try {
      const { _id } = req.params;
  
      const docToDelete = await BreakFastModel.findById(_id);
      if (!docToDelete) {
        return res.status(404).json({
          message: 'Card not found',
          data: false,
          result: null,
        });
      }
  
      const imagePath = `./${docToDelete.imageDetails.imageUrl}`;
      fs.unlinkSync(imagePath);
      fs.rmdirSync(`./assets/Menu/Breakfast/${docToDelete.FoodName}`);
  
      const hardDeleteResult = await BreakFastModel.deleteOne({ _id });
  
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

  const LunchPostApi = async (req,res) =>{
    try {
        const {FoodName,FoodDescription,FoodPrice} = req.body;
        const MappingOfstarterApi = new LunchModel({
            FoodName,FoodDescription,FoodPrice,
            imageDetails: {
                imageUrl: `assets/Menu/lunch/${FoodName}/${req.file.filename}`,
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

const GetAlllunchApi =async (req,res) =>{
    try {
        const DocToGet = await LunchModel.find();
        res.json({
            message:'Api Works!!',
            Data:true,
            Result:DocToGet
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}

const GetlunchApiById =async (req,res) =>{
   try {
    const Id = req.params._id
    const DocToFind = await LunchModel.findById(
        {_id:Id}
    );
    res.json({
        message:'API WORKS!!!',
        Data:true,
        Result:DocToFind
    })
   } catch (error) {
    res.json({
        message:error.message,
        Data:false,
        Result:null
    })
   }
}



const HardDeleteLunchApi = async (req, res) => {
    try {
      const { _id } = req.params;
  
      const docToDelete = await LunchModel.findById(_id);
      if (!docToDelete) {
        return res.status(404).json({
          message: 'Card not found',
          data: false,
          result: null,
        });
      }
  
      const imagePath = `./${docToDelete.imageDetails.imageUrl}`;
      fs.unlinkSync(imagePath);
      fs.rmdirSync(`./assets/Menu/lunch/${docToDelete.FoodName}`);
  
      const hardDeleteResult = await LunchModel.deleteOne({ _id });
  
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
    HardDeletestarterApi,
    BreakFastPostApi,
    GetBreakfastAllApi,
    GetBreakFastApiById,
    HardDeletebreakfastApi,
    LunchPostApi,
    GetAlllunchApi,
    GetlunchApiById,
    HardDeleteLunchApi
}