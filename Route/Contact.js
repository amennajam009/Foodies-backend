const express = require('express');
const Router =  express.Router();

const {
    OrderTableApi,
    ContactUsApi 
} = require('../controller/Contact')


Router.post('/OrderTableApi',OrderTableApi)
Router.post('/ContactUsApi',ContactUsApi)
module.exports = Router;