const {HeroImage,FourCards} = require("../model/generalsettingmodel");
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
          mageMimeType: mimetype,
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
        const {Headingone,descriptionone,HeadingTwo,descriptionTwo,
             HeadingThree,descriptionThree,HeadingFour,descriptionFour,
                } = req.body;
                let ImageDetails=[]
                req.files.forEach(element => {
                  const {filename,orignalname,mimetype}=element
                  ImageDetails.push({
                      ImageUrl:`assets/Product/${Headingone}/${filename}`,
                      ImageName:orignalname,
                      ImageMimeType:mimetype
                  })
              });
        const DoctoSend = new FourCards({
            Headingone,descriptionone,HeadingTwo,descriptionTwo,HeadingThree,descriptionThree,HeadingFour,descriptionFour,
            ImageDetail:ImageDetails
        });
        const SaveDoc = await DoctoSend.save();
        res.json({
            message:"Api of FourCard is working",
            Data:true,
            Result:SaveDoc
        })
   } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
   }
  }


  const GetHeadingDescriptionFourCards =async (req,res) =>{
      try {
        const GetFourCard = await FourCards.find();
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

  const DelFourCards =async (req,res) =>{
      
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


  const Harddelete = async (req, res) => {
    try {
      const Id = req.params._id;
      const DocToHardDel = await FourCards.findOne({_id: Id});
      if (!!DocToHardDel) {
        const HardDelById = await FourCards.deleteOne({_id: DocToHardDel._id});
        DocToHardDel.ImageDetail.forEach((file) => {
          fs.unlinkSync(`${file.ImageUrl}`);
        });
        fs.rmdirSync(`./assets/Product/${DocToHardDel.Headingone}`);
        res.json({
          message: "Api of HardDelete Is Working Successfully!!",
          Data: true,
          Result: HardDelById
        });
      }
    } catch (error) {
      res.json({
        message: error.message,
        Data: false,
        Result: null
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
  
module.exports={
    HeroImageApi,
    FourCardsApi,
    GetHeadingDescriptionFourCards,
    DelFourCards,
    DeleteAllDatabase,
    Harddelete,
    GetHeroImage,
    HardDeletHeroImage,
    HeroImageGetById,
    GetFourCardsById
    
}