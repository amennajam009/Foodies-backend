const {customeronlinebooking} = require('../model/customeronlinebooking');
// const {customerHtmlCode} = require('../CustomerHtml/customerHtml')

const CustomerOnlineBookingAPI =async (req,res) =>{
    try {
        const {Username,Emailaddress,FirstName,LastName,City} =req.body;
        const Htmlcode = 
        `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${Username}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${FirstName}</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">${LastName}</a>
          <a href="#" class="card-link">${City}</a>
          <a href="#" class="card-link">${Emailaddress}</a>
        </div>
      </div>
        `
        const MappingData = new customeronlinebooking({
            Username,
            Emailaddress,
            FirstName,
            LastName,
            City,
            html:Htmlcode
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


const CustomerOnlineBookinggetAPI =async (req,res) =>{
 try {
    const GetData = await customeronlinebooking.find();
    res.json({
        message:"Api Working Successfully!!",
        Data:true,
        Result:GetData
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
   CustomerOnlineBookingAPI,
   CustomerOnlineBookinggetAPI
    }