const HeroImage = require("../model/generalsettingmodel");


const HeroImageApi = async (req, res) => {
    try {
      let ImageDetails = []; // Define ImageDetails array here
      req.files.forEach((element) => {
        const { filename, orignalname, mimetype } = element;
        ImageDetails.push({
          ImageUrl: `/assets/heroimage/${filename}`,
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



module.exports={
    HeroImageApi
}