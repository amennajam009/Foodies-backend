//Dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SaltRounds = 10;


//Start Block Schema Creating
const UserRegisterSchema = mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    // email: { type: String, required: true, unique:true},
    Email: { type: String, required: true ,unique:true},
    Password: { type: String, required: true},
    saltString: { type:String},
    status: { type:Number, default:1 },
},{timestamps:true})

UserRegisterSchema.pre('save', function(next){
    bcrypt.genSalt(SaltRounds,(err,salt)=>{
        if(salt){
        this.saltString=salt;
        bcrypt.hash(this.Password,salt,(err,hash)=>{
            this.Password=hash;
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