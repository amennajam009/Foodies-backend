const express = require('express');
const Router =  express.Router();

const {CustomerOnlineBookingAPI} = require('../controller/customeronlinebooking')

Router.post('/CustomerOnlineBooking',CustomerOnlineBookingAPI)



module.exports = Router;