//Dependencies
const mongoose = require('mongoose');


// FourCards

const OrderTable = new mongoose.Schema({
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




 const ContacUs = new mongoose.Schema({
    UserName: { type:String, required:true },
    UserEmail:{type:String, required:true},
    Subject:{type:String, required:true},
    Message:{type:String, required:true}   
},
 { timestamps: true });

 module.exports = mongoose.model('OrderTableCollection',OrderTable); 


 module.exports = {
    OrderTable: mongoose.model('OrderTableCollection', OrderTable),
    ContacUs: mongoose.model('ContactCollection', ContacUs),  
  };