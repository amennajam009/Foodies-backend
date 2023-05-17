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
 { timestamps: true });

 const BreakFastModel = new mongoose.Schema({
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
 { timestamps: true });


 const LunchModel = new mongoose.Schema({
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
 { timestamps: true });


 const PopularFoodModel = new mongoose.Schema({
    CardHeading : { type:String, required:true },
    CardDescription:{type:String, required:true},
    status: { type: Number, default: 1 },
    imageDetails: 
        {
            imageUrl: { type: String  },
            imageName: { type: String  },
            imageMimeType: { type: String},
        }
    
},
 { timestamps: true });

 

 module.exports = {
    StarterModel:mongoose.model('StarterCollection',StarterModel),
    BreakFastModel:mongoose.model('BreakFastCollection', BreakFastModel),
    LunchModel:mongoose.model('LunchCollection', LunchModel),
    PopularFoodModel:mongoose.model('PopularFoodModelCollection', PopularFoodModel),
    // FourCards: mongoose.model('FourCards', FourCards),
    // TwoCards:  mongoose.model('TwoCards', TwoCards),
    // FrequentlyAskedQue: mongoose.model('FrequentlyAskedQue',FrequentlyAskedQue)
  
  };

