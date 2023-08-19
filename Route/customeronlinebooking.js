const express = require('express');
const Router =  express.Router();

const {Onlinecustomer} = require('../middleware/customeronline')
const {CustomerOnlineBookingAPI} = require('../controller/customeronlinebooking')

Router.post('/CustomerOnlineBooking',Onlinecustomer.single('images'),CustomerOnlineBookingAPI)



module.exports = Router;