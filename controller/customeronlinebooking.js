const {CustomerOnlineBooling}  = require('../model/customeronlinebooking');


const CustomerOnlineBookingAPI =async (req,res) =>{
    try {
        const {Username,Emailaddress,FirstName,LastName,City} =req.body;
        const MappingData = await CustomerOnlineBooling.save({
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
        res.json({
            result:MappingData,
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