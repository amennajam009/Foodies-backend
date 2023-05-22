const express = require('express');
const Router =  express.Router();

const {
    OrderTableApi 
} = require('../controller/Contact')


Router.post('/OrderTableApi',OrderTableApi)

module.exports = Router;