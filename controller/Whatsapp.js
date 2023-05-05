const {WhatsAppSchema}  = require('../model/whatsappModel')
const accountSid = 'AC62eb350e0c37bde94c692dc2539c7ac2';
const authToken = 'e40ee93c57794a85fe5e997fc1b62944';
const client = require('twilio')(accountSid, authToken);

const WhatsappApi = async (req, res) => {
    try {
        const _SendMessage = req.body.WhatsAppMessage;
        const _PhoneNumber = req.body.PhoneNumber;

        client.messages.create({
            from: 'whatsapp:+14155238886',
            body:   '  ' ,
            to: 'whatsapp:+923064484061'
        })
            .then(message => {
                res.json({
                    Message: "We Have Received your Message We will get back to you Soon on WhatsApp",
                })
            })
            .catch(error => {
                res.json({
                    message: error.message,
                    Data: false,
                    Result: null
                })
            });
    } catch (error) {
        res.json({
            message: error.message,
            Data: false,
            Result: null
        })
    }
}




    module.exports={
        WhatsappApi
    }




