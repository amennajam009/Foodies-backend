const {customeronlinebooking} = require('../model/customeronlinebooking');


const CustomerOnlineBookingAPI =async (req,res) =>{
    try {
        const {Username,Emailaddress,FirstName,LastName,City} =req.body;
        const MappingData = new customeronlinebooking({
            Username,
            Emailaddress,
            FirstName,
            LastName,
            City,
            imageDetails: {
                imageUrl: `assets/customers/${FirstName}/${req.file.filename}`,
                imageName: req.file.originalname,
                imageMimeType: req.file.mimetype,
            }
        });
        const DocToSave = await MappingData.save()
        res.json({
            result:DocToSave,
            message:'Saved Successfully!!',
            data:true
        })
    } catch (error) {
        res.json({
            result:null,
            message:error.message,
            data:false,
        })
    }
} 

module.exports={
   CustomerOnlineBookingAPI
    }