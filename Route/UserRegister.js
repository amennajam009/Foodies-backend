// Router
const express = require ('express');
const Router = express.Router();






const {  UserRegister, 
    UserLogin} = require ('../controller/UserRegister')





// Define Routers
Router.post('/UserLogin',UserLogin);
Router.post('/UserRegister',UserRegister);
// Define Routers

//Export
module.exports=Router