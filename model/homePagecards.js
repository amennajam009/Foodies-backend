//Dependencies
const mongoose = require('mongoose');


// FourCards

const homeCard = new mongoose.Schema({
    cardName : { type:String, required:true },
    cardDescriptionFour:{type:String, required:true},
    status: { type: Number, default: 1 },
    imageDetails: 
        {
            imageUrl: { type: String  },
            imageName: { type: String  },
            imageMimeType: { type: String},
        }
    
},
 { timestamps: true });



 module.exports = mongoose.model('HomeCardsCollection', homeCard); 