const mongoose = require('mongoose');


const StarterModel = new mongoose.Schema({
    FoodName : { type:String, required:true },
    FoodDescription:{type:String, required:true},
    FoodPrice:{type:Number, require:true},
    status: { type: Number, default: 1 },
    imageDetails: 
        {
            imageUrl: { type: String  },
            imageName: { type: String  },
            imageMimeType: { type: String},
        }
    
},
 { timestamps: true })

 
 module.exports = mongoose.model('StarterCollection', StarterModel); 