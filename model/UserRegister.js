//Dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SaltRounds = 10;

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();

//Start Block Schema Creating
const UserRegisterSchema = mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true, unique:true},
    password: { type: String, required: true},
    saltString: { type:String},
    status: { type:Number, default:1 },
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
})

UserRegisterSchema.pre('save', function(next){
    bcrypt.genSalt(SaltRounds,(err,salt)=>{
        if(salt){
        this.saltString=salt;
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            next();
        })
    }
    else {
        res.json({
            Error:err.message
        })
    }
    })
});
//End Block Schema Creating

//Exporting The Schema
module.exports = mongoose.model('UserRegisterCollection', UserRegisterSchema);