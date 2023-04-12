const {HeroImage,FourCards, TwoCards} = require("../model/generalsettingmodel");
const  homeCardModel  = require('../model/homePagecards')
const fs=require('fs');
// const model = require ("../middleware/Newmodel")


const HeroImageApi = async (req, res) => {
    try {
      let imageDetails = [];
                             
      // Define ImageDetails array here
      
      req.files.forEach((element) => {
        const { filename, orignalname, mimetype } = element;
        imageDetails.push({
          imageUrl: `./assets/heroimage/${filename}`,
          imageName: orignalname,
          ImageMimeType: mimetype,
        });
      });
      console.log(req.files)
      
      const ImageToSave = new HeroImage({
        imageDetail: imageDetails,
      });
      const DocToSave = await ImageToSave.save();
      res.json({
        Message: "Api of Image Is Working",
        Data: true,
        Result: DocToSave,
      });
    } catch (error) {
      res.json({
        Message: error.message,
        Data: false,
        Result: null,
      });
    }
  };


  const FourCardsApi =async (req,res) =>{
   try {
        const { cardName,cardDescriptionFour } = req.body; 
        // const imageDetails = req.files.map(file => ({
        // imageUrl: `assets/cards/${file.filename}`,
        //   imageName: file.originalname,
        //   imageMimeType: file.mimetype
        // }));
      
        const docToCreate = new homeCardModel({
          cardName, cardDescriptionFour, 
          imageDetails: {
            imageUrl: `assets/cards/${cardName}/${req.file.filename}`,
            imageName: req.file.originalname,
            imageMimeType: req.file.mimetype,
        }
        });
        const docToSave = await docToCreate.save(); 
        res.json({
            message:"Card Saved !!!",
            data:true,
            result:docToSave 
        })
   } catch (error) {
        res.json({
            message:error.message,
            data:false, 
            result:null
        })
   }
  }


  const GetHeadingDescriptionFourCards =async (req,res) =>{
      try {
        const GetFourCard = await homeCardModel.find().lean();
        res.json({
            message:"Api of GetFourCard Is Working Successfully!!",
            Data:true,
            Result:GetFourCard
        })
      } catch (error) {
        res.json({
            message:error.message, 
            Data:false,
            Result:null
        })
      }
  }
 
const GetHeroImage =async (req,res) =>{
  try {
    const HeroImageOfHome = await HeroImage.find();
    res.json({
      message:"Api of GetHero is working",
      Data:true,
      Result:HeroImageOfHome
    })
  } catch (error) {
    res.json({
      message:error.message,
      Data:false,
      Result:null
  })
  }
}

  const HardDelFourCards =async (req,res) =>{
      
      try {
        const Id = req.params._id;
        const CardToDel = new FourCards(
            {_id:Id}
        );
        const DocToDel = await CardToDel.deleteOne();
        res.json({
            message:"Api of del is working successfully!!!",
            Data:true,
            Result:DocToDel
        })
      } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
      }
  }


  const DeleteAllDatabase =async (req,res ) =>{
      try {
        const AllDocToDel = await FourCards.deleteMany();
        res.json({
          message:"All Data  Is deleted Successfully",
          Data:true,
          Result:AllDocToDel
        })
      } catch (error) {
        res.json({
          message:error.message,
          Data:false
        })
      }
  }


  // const Harddelete = async (req, res) => {
  //   try {
  //     const Id = req.params._id;
  //     const DocToHardDel = await homeCardModel.findOne({_id: Id});
  //     if (!!DocToHardDel) {
  //       const HardDelById = await homeCardModel.deleteOne({_id: DocToHardDel._id});
  //       DocToHardDel.imageDetails.forEach((file) => {
  //         fs.unlinkSync(`${file.imageUrl}`);
  //       });
  //       fs.rmdirSync(`./assets/cards/${DocToHardDel.cardName}`);
  //       res.json({
  //         message: "Api of HardDelete Is Working Successfully!!",
  //         Data: true,
  //         Result: HardDelById
  //       });
  //     }
  //   } catch (error) {
  //     res.json({
  //       message: error.message,
  //       Data: false,
  //       Result: null
  //     });
  //   }
  // };

  const Harddelete = async (req, res) => {
    try {
      const { _id } = req.params;
  
      const docToDelete = await homeCardModel.findById(_id);
      if (!docToDelete) {
        return res.status(404).json({
          message: 'Card not found',
          data: false,
          result: null,
        });
      }
  
      const imagePath = `./${docToDelete.imageDetails.imageUrl}`;
      fs.unlinkSync(imagePath);
      fs.rmdirSync(`./assets/cards/${docToDelete.cardName}`);
  
      const hardDeleteResult = await homeCardModel.deleteOne({ _id });
  
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
 


  const HardDeletHeroImage = async(req,res)=>{
        try {
          const Id = req.params._id;
          const DocToHardDel = await HeroImage.findOne({_id: Id});
          if (!!DocToHardDel) {
            const HardDelById = await HeroImage.deleteOne({_id: DocToHardDel._id});
            DocToHardDel.imageDetail.forEach((file) => {
              fs.unlinkSync(`${file.imageUrl}`);
            });
            fs.rmdirSync(`./assets/heroimage`);
            res.json({
              message: "Api of HardDelete Is Working Successfully!!",
              Data: true,
              Result: HardDelById
            });
          }
        } catch (error) {
          res.json({
            message:error.message,
            Data:false,
            Result:null
          })
        }
  }

  const HeroImageGetById =async (req,res) =>{
    try {
      const Id = req.params._id;
      const GetbyId = await HeroImage.findOne(
        {_id:Id}
      );
      res.json({
        message:"Api Working Successfully",
        Data:true,
        Result:GetbyId
      })
    } catch (error) {
      res.json({
        message:error.message,
        Data:false,
        Result:null
      })
    }

  }

  const GetFourCardsById =async (req,res) =>{
       try {
        const Id = req.params._id;
        const GetById = await FourCards.findOne(
          {_id:Id}
        );
        res.json({
          message:"Api Works Successfully!!",
          Data:true,
          Result:GetById
        })
       } catch (error) {
        res.json({
          message:error.message,
          Data:false,
          Result:null
        })
       }
  }

  // const TwoImagesApi = async (req, res) => {
  //   try {
  //     let ImageDetails = [];
                             
  //     // Define ImageDetails array here
      
  //     req.files.forEach((element) => {
  //       const { filename, orignalname, mimetype } = element;
  //       ImageDetails.push({
  //         ImageUrl: `./assets/Twoimage/${filename}`,
  //         ImageName: orignalname,
  //         ImageMimeType: mimetype,
  //       });
  //     });
  //     console.log(req.files)
      
  //     const ImageToSave = new TwoCards({
  //       ImageDetail: ImageDetails,
  //     });
  //     const DocToSave = await ImageToSave.save();
  //     res.json({
  //       Message: "Api of Image Is Working",
  //       Data: true,
  //       Result: DocToSave,
  //     });
  //   } catch (error) {
  //     res.json({
  //       Message: error.message,
  //       Data: false,
  //       Result: null,
  //     });
  //   }
  // };
  

  
const TwoImagesApi = async (req, res) => {
  try {
    let imageDetails = [];
                           
    // Define ImageDetails array here
    
    req.files.forEach((element) => {
      const { filename, orignalname, mimetype } = element;
      imageDetails.push({
        imageUrl: `./assets/Twoimage/${filename}`,
        imageName: orignalname,
        imageMimeType: mimetype,
      });
    });
    console.log(req.files)
    
    const ImageToSave = new TwoCards({
      imageDetail: imageDetails,
    });
    const DocToSave = await ImageToSave.save();
    res.json({
      Message: "Api of Image Is Working",
      Data: true,
      Result: DocToSave,
    });
  } catch (error) {
    res.json({
      Message: error.message,
      Data: false,
      Result: null,
    });
  }
};


  const GetTwocardsApi = async (req,res) =>{
   try {
    const GetTwoImage = await TwoCards.find();
    res.json({
      message:"Api of Get working successfullyy!!!",
      Data:true,
      Result:GetTwoImage
    })
   } catch (error) {
      res.json({
        message:error.message,
        Data:false,
        Result:null
      })
   }
  }



  const hardDeleteApiOfFourCards =async (req,res) =>{
      try {
        
      } catch (error) {
        
      }
  }
module.exports={
    HeroImageApi,
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
    GetTwocardsApi
    
}