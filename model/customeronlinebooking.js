//Dependencies
const mongoose = require('mongoose');


const customeronlinebooking = new mongoose.Schema({
    Username: { type:String, required:true },
    Emailaddress:{type:String, required:true},
    FirstName:{type:String, required:true},
    LastName:{type:String, required:true},
    City:{type:String, required:true},
    html: {type: String},
    // People:{type:Number, required:true},
    // Message:{type:String, required:true},
    // status: { type: Number, default: 1 },
    
},
 { timestamps: true });




module.exports = {
    customeronlinebooking: mongoose.model('CustomerOnlineBooking', customeronlinebooking),
  };