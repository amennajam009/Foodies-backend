const {HeroImage,FourCards} = require("../model/generalsettingmodel");



const HeroImageApi = async (req, res) => {
    try {
      let ImageDetails = []; // Define ImageDetails array here
      req.files.forEach((element) => {
        const { filename, orignalname, mimetype } = element;
        ImageDetails.push({
          ImageUrl: `./asserts/heroimage/${filename}`,
          ImageName: orignalname,
          ImageMimeType: mimetype,
        });
      });
      
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
        const {Headingone,HeadingTwo,HeadingThree,HeadingFour} = req.body;

        const DoctoSend = new FourCards({
            Headingone,HeadingTwo,HeadingThree,HeadingFour
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


module.exports={
    HeroImageApi,
    FourCardsApi
}