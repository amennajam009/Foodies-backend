const express=require('express');
require('dotenv').config();
const path=require('path')
const cors= require('cors')
// const LoadMyEnviormentVariables = require('./configuration/LoadEnv-variable');
const database = require("./configuration/config");




// //Block Start Initialize the app and Creating app mete-data
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());
// static ka matlb hai icko hum access kr paa rhy han 
app.use('/assets', express.static('assets')); 

const PORT = process.env.PORT || 6000


app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next();
     //if nothing of the response sent back so next() means other rou
});



const _Generalsetting = require("./Route/generalsetting");
const _menu = require ("./Route/menu")
const _WhatsApp = require('./Route/Whatsapp');
const _Contact = require('./Route/Contact');
const _AdminRegister = require('./Route/AdminRegister');
const _UserRegister = require('./Route/UserRegister')





// Routes
app.use('/Generalsetting',_Generalsetting)
app.use('/menu',_menu)
app.use('/WhatsApp',_WhatsApp)
app.use('/Contact',_Contact)
app.use('/AdminRegister', _AdminRegister)
app.use('/UserRegister', _UserRegister)


// this is our error handling !!!!!!!
app.use((req, res, next) => {
    const error = new Error('Url not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    })
});





// //Start Block Accessing The Routes in the Entry Point

app.listen(PORT,()=>{
    console.log(`your port is ${PORT}`)
    // console.log(process.env)
    
})