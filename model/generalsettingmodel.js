//Dependencies
const mongoose = require('mongoose');

//Start Block Schema Creating
const HeroImage = new mongoose.Schema({
    imageDetail: [
        {
            imageUrl: { type: String },
            imageName: { type: String },
            imageMimeType: { type: String },
        }
    ],
    status: { type: Number, default: 1 },
  
}, { timestamps: true })




// Three Cards 
const ThreeHomeCards = new mongoose.Schema({
    imageDetails: [
    {
        imageUrl: { type: String  },
        imageName: { type: String  },
        imageMimeType: { type: String},
    },
],

    imageHeading:{type:String , required:true},
    backflipCardHeading:{type:String, required:true},
    backflipCardDescription:{type:String, required:true},
    backflipCardDescription2:{type:String, required:true},
    Price:{type:Number, required:true},
    status: { type: Number, default: 1 },
  
}, { timestamps: true })

// FourCards
const FourCards = new mongoose.Schema({
    Headingone: {type:String, required:true },
    descriptionone: {type:String, required:true },
    HeadingTwo: {type:String, required:true },
    descriptionTwo: {type:String, required:true },
    HeadingThree: {type:String, required:true },
    descriptionThree: {type:String, required:true },
    HeadingFour: {type:String, required:true },
    descriptionFour:{type:String, required:true},
    status: { type: Number, default: 1 },
    ImageDetails: [
        {
            ImageUrl: { type: String  },
            ImageName: { type: String  },
            ImageMimeType: { type: String},
        }
    ],
  
},
 { timestamps: true })

// Twocards Model
 const TwoCards = new mongoose.Schema({
    imageDetail: [
        {
            imageUrl: { type: String },
            imageName: { type: String },
            imageMimeType: { type: String },
        }
    ],
    status: { type: Number, default: 1 },
   
}, { timestamps: true })


// frequently Asked Questions 
const FrequentlyAskedQue = new mongoose.Schema({
    headingQue : { type:String, required:true },
    AnswerQue:{type:String, required:true},
    status: { type: Number, default: 1 },
}, { timestamps: true })





module.exports = {
    HeroImage: mongoose.model('HeroImage', HeroImage),
    FourCards: mongoose.model('FourCards', FourCards),
    TwoCards:  mongoose.model('TwoCards', TwoCards),
    FrequentlyAskedQue: mongoose.model('FrequentlyAskedQue',FrequentlyAskedQue), 
    ThreeHomeCards: mongoose.model('ThreeHomeCardsCollection',ThreeHomeCards)
  
  };






