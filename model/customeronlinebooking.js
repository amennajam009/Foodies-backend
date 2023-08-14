//Dependencies
const mongoose = require('mongoose');


const customeronlinebooking = new mongoose.Schema({
    YourName: { type:String, required:true },
    YourEmail:{type:String, required:true},
    YourPhone:{type:String, required:true},
    Date:{type:String, required:true},
    Time:{type:String, required:true},
    People:{type:Number, required:true},
    Message:{type:String, required:true},
    status: { type: Number, default: 1 },
    
},
 { timestamps: true });




module.exports = {
    OrderTable: mongoose.model('CustomerOnlineBooking', customeronlinebooking),
  };