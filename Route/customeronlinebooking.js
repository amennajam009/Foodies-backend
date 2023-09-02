const express = require('express');
const Router =  express.Router();

const {CustomerOnlineBookingAPI,
    CustomerOnlineBookinggetAPI} = require('../controller/customeronlinebooking')

Router.post('/CustomerOnlineBooking',CustomerOnlineBookingAPI)
Router.get('/CustomerOnlineBookinggetAPI',CustomerOnlineBookinggetAPI)


module.exports = Router;