//Dependencies
const mongoose = require('mongoose');

// Date
// edhr humny new date assign krdi hai jo k user readability wali date dyga 
const today = new Date();
// edhr hum today uper wala ly gy or hum edhr today.getdate krein gy toh humry pas edhr date ajyegi
const day = today.getDate();
// edhr humny .getmonth() protype use kia hai or agay +1 lagaya hai kyu k yeh point may deta hai that' why +1 lagaya hai
const month = today.getMonth() + 1; 
const year = today.getFullYear(); //year
const time = today.getTime(); //time 

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
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
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
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
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
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
}, { timestamps: true })


// frequently Asked Questions 
const FrequentlyAskedQue = new mongoose.Schema({
    headingQue : { type:String, required:true },
    AnswerQue:{type:String, required:true},
}, { timestamps: true })





module.exports = {
    HeroImage: mongoose.model('HeroImage', HeroImage),
    FourCards: mongoose.model('FourCards', FourCards),
    TwoCards:  mongoose.model('TwoCards', TwoCards),
    FrequentlyAskedQue: mongoose.model('FrequentlyAskedQue',FrequentlyAskedQue)
  
  };






