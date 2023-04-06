const {HeroImage,FourCards} = require("../model/generalsettingmodel");
// const fs=require('fs')
// const model = require ("../middleware/Newmodel")


const HeroImageApi = async (req, res) => {
    try {
      let ImageDetails = [];
                             
      // Define ImageDetails array here
      
      req.files.forEach((element) => {
        const { filename, orignalname, mimetype } = element;
        ImageDetails.push({
          ImageUrl: `./asserts/heroimage/${filename}`,
          ImageName: orignalname,
          ImageMimeType: mimetype,
        });
      });
      console.log(req.files)
      
      const ImageToSave = new HeroImage({
        ImageDetail: ImageDetails,
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
              if (req.files && req.files.length > 0) {
                req.files.forEach(element => {
                  const {filename,orignalname,mimetype}=element
                  ImageDetails.push({
                      ImageUrl:`assets/Product/${Headingone}/${filename}`,
                      ImageName:orignalname,
                      ImageMimeType:mimetype
                  })
                });
              }
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


  
module.exports={
    HeroImageApi,
    FourCardsApi,
    GetHeadingDescriptionFourCards,
    DelFourCards,
    DeleteAllDatabase
    
}