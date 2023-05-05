const express = require('express');
const Router = express.Router();

const {
    WhatsappApi
} = require('../controller/Whatsapp')






Router.post('/WhatsappApi',WhatsappApi)




module.exports = Router;