// Router
const express = require ('express');
const Router = express.Router();






const { AdminRegister , AdminLogin} = require ('../controller/AdminResgister')





// Define Routers
Router.post('/AdminRegister',AdminRegister) 
Router.post('/AdminLogin',AdminLogin)
// Define Routers

//Export
module.exports=Router